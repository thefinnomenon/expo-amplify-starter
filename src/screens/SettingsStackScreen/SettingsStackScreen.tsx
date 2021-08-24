import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../SettingsScreen';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen(props: Props): JSX.Element {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

SettingsStackScreen.defaultProps = defaultProps;
