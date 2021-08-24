import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import SettingsScreen from '@/screens/SettingsStackScreen';
import { Home, Settings } from '../routes';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

const Tab = createBottomTabNavigator();

export default function TabScreen(props: Props): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Home} component={HomeScreen} />
      <Tab.Screen
        name={Settings}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

TabScreen.defaultProps = defaultProps;
