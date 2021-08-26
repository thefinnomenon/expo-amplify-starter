import React from 'react';
import { Alert as NativeAlert } from 'react-native';

export const Alert = (title: string, message: string, handleClose: () => void = () => {}): void => {
  NativeAlert.alert(title, message, [{ text: 'OK', onPress: () => handleClose() }], { cancelable: false });
};

export default Alert;
