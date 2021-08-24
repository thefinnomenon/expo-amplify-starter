import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home, RootStackParamList } from '@/screens/routes';

// @ts-ignore
type Props = NativeStackScreenProps<RootStackParamList, Home>;

export default function HomeScreen(props: Props): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
    </View>
  );
}
