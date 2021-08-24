import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home, Settings, RootStackParamList } from '@/screens/routes';

// @ts-ignore
type Props = NativeStackScreenProps<RootStackParamList, Settings>;

export default function SettingsScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate(Home)} />
    </View>
  );
}
