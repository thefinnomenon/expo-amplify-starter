import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { NotificationResponse, Notification } from 'expo-notifications';
import { Subscription } from '@unimodules/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API, { GraphQLResult, graphqlOperation } from '@aws-amplify/api';
import { PUSHTOKEN_KEY } from '@/utilities/localStorage';
import { createPushToken, updatePushToken } from './mutations';
import { Alert } from '@/utilities/alerts';
import { CreatePushTokenMutation, UpdatePushTokenMutation } from '@/utilities/amplify';

export default class NotificationManager {
  EXPERIENCE_ID = '@thefinnomenon/whistle';
  // private addPushTokenListener: Subscription;
  private notificationListener: Subscription;
  private responseListener: Subscription;
  expoPushToken!: string;
  notification!: Notification;
  notificationResponse!: NotificationResponse;

  constructor() {
    // Set notification handler for handling notifications when app is foregrounded
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    // Set interactive notification categories
    Notifications.setNotificationCategoryAsync('YESNO', [
      { identifier: 'YES', buttonTitle: 'Yes 👍', options: { opensAppToForeground: false } },
      { identifier: 'NO', buttonTitle: 'No 👎', options: { opensAppToForeground: false } },
    ]);

    // Setup token refresh listener
    // this.addPushTokenListener = Notifications.addPushTokenListener(this.registerForPushNotifications);

    // Add notification listener (foregrounded)
    this.notificationListener = Notifications.addNotificationReceivedListener(notification => {
      this.notification = notification;
    });

    // Add interacted notification listener (foregrounded, backgrounded, killed)
    this.responseListener = Notifications.addNotificationResponseReceivedListener(async response => {
      this.notificationResponse = response;
      console.log(`NOTIFICATION RESPONSE ACTION: ${response.actionIdentifier}`);

      // Dismiss notification
      Notifications.dismissNotificationAsync(response.notification.request.identifier);
    });
  }

  async registerForPushNotifications(): Promise<void> {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert('Notification Error', 'Failed to get push token for push notification');
      }
      try {
        token = (await Notifications.getExpoPushTokenAsync({ experienceId: this.EXPERIENCE_ID })).data;
        this.updatePostTokenAmplify(token);
      } catch (error) {
        console.log('Error: ', error);
        Alert('Notification Error', 'Failed to register push token');
      }
    } else {
      Alert('Notification Error', 'Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        // sound: 'whistle.wav', // Provide ONLY the base filename
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    this.expoPushToken = token || '';
  }

  private async updatePostTokenAmplify(token: string): Promise<void> {
    const type = Platform.OS;
    try {
      // Retrieve and parse token (if exists)
      const storedToken = await AsyncStorage.getItem(PUSHTOKEN_KEY);
      // const storedToken = jsonStoredToken != null ? JSON.parse(jsonStoredToken) : null;

      // First time saving token -> create record
      if (!storedToken) {
        // Create record
        const res = (await API.graphql(
          graphqlOperation(createPushToken, { input: { type, token } }),
        )) as GraphQLResult<CreatePushTokenMutation>;
        const data = res.data?.createPushToken;

        // Store token in local storage
        if (data) {
          await AsyncStorage.setItem(PUSHTOKEN_KEY, token);
        }
        return;
      }

      // Stored token doesn't match current token -> update record
      if (storedToken !== token) {
        // Update record
        const res = (await API.graphql(
          graphqlOperation(updatePushToken, { input: { token, type } }),
        )) as GraphQLResult<UpdatePushTokenMutation>;
        const data = res.data?.updatePushToken;

        // Update token in local storage
        if (data) {
          await AsyncStorage.setItem(PUSHTOKEN_KEY, token);
        }
      }
    } catch (error) {
      console.log(error);
      Alert('Notification Error', 'Failed to update push token');
    }
  }

  async scheduleNotification(seconds: number, title: string): Promise<void> {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
      },
      trigger: {
        seconds,
        channelId: 'default',
      },
    });
  }

  destructor(): void {
    // this.addPushTokenListener.remove();
    this.notificationListener.remove();
    this.responseListener.remove();
  }
}
