import React, { useEffect, useState } from 'react';
import Amplify from 'aws-amplify';
import { Hub } from '@aws-amplify/core';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './screens/TabScreen';
import MobileAuthStackScreen from './screens/MobileAuthStackScreen';
import config from './aws-exports';
import NotificationManager from '@/api/notifications';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

Amplify.configure(config);

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const [user, setUser] = useState(null);
  const [notificationManager, setNotificationManager] = useState<NotificationManager>(new NotificationManager());

  // Monitor auth state
  useEffect(() => {
    const updateUser = async () => {
      try {
        const usr = await Amplify.Auth.currentAuthenticatedUser();
        setUser(usr);
      } catch {
        setUser(null);
      }
    };
    // Listen for login/signup events
    Hub.listen('auth', updateUser);
    // Check manually the first time because we won't get a Hub event
    updateUser();
    return () => Hub.remove('auth', updateUser);
  }, []);

  // Register for push notifications
  useEffect(() => {
    notificationManager.registerForPushNotifications();
    // notificationManager.scheduleNotification(5, 'Hi!');
    return () => notificationManager.destructor();
  }, [notificationManager]);

  return (
    <NavigationContainer>
      {!user ? (
        <MobileAuthStackScreen />
      ) : (
        <Drawer.Navigator initialRouteName="TabScreen">
          <Drawer.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

export default App;
