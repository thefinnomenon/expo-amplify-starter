import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text accessibilityLabel="Text">Text 1</Text>
      <Text accessibilityLabel="Text">Text 2</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
