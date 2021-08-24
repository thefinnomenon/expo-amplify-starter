import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './screens/TabScreen';

const Drawer = createDrawerNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TabScreen">
        <Drawer.Screen
          name="TabScreen"
          component={TabScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();
