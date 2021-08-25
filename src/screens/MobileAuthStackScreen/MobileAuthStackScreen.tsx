import React from 'react';
import styled from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MobileInputScreen from '@/screens/MobileInputScreen';
import MobileVerificationScreen from '../MobileVerificationScreen';
import { MobileInput, MobileVerification } from '@/screens/routes';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

const MobileAuthStack = createNativeStackNavigator();

export default function MobileAuthStackScreen(props: Props): JSX.Element {
  return (
    <MobileAuthStack.Navigator>
      <MobileAuthStack.Screen name={MobileInput} component={MobileInputScreen} options={{ headerShown: false }} />
      <MobileAuthStack.Screen
        name={MobileVerification}
        component={MobileVerificationScreen}
        options={{ headerShown: false }}
      />
    </MobileAuthStack.Navigator>
  );
}

MobileAuthStackScreen.defaultProps = defaultProps;
