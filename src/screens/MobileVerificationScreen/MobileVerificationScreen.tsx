import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { passwordlessMobileLoginVerify, resendConfirmationCode } from '@/api/auth';
import { Alert } from '@/utilities/alerts';

const PINCOUNT = 6;

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({
  resendTimeout: 5,
  isVerifying: false,
  error: '',
  code: '',
});

export default function MobileVerificationScreen({
  // @ts-ignore
  route,
  // @ts-ignore
  navigation,
}: Props): JSX.Element {
  const { mobile } = route.params;
  const [resendTimeout, setResendTimeout] = useState(initialState.resendTimeout);
  const [isVerifying, setIsVerifying] = useState(initialState.isVerifying);
  const [error, setError] = useState(initialState.error);
  const [code, setCode] = useState(initialState.code);

  const handleResend = async () => {
    if (resendTimeout !== 0) {
      return;
    }

    try {
      await resendConfirmationCode(mobile);
      Alert('Resend Success', 'Resent verification code.');
    } catch (e) {
      showErrorAlert(e.message);
    }

    setResendTimeout(initialState.resendTimeout);
  };

  const handleChangeNumber = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setResendTimeout(resendTimeout === 0 ? resendTimeout : resendTimeout - 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleAlertClose = () => {
    setCode(initialState.code);
  };

  const showErrorAlert = (err: string) => {
    Alert('Error', err, handleAlertClose);
  };

  const handleOnChange = async (value: string) => {
    setCode(value);
    if (value.length === PINCOUNT) {
      setIsVerifying(true);
      try {
        await passwordlessMobileLoginVerify(mobile, value);
      } catch (e) {
        showErrorAlert(e.message);
        setError(e.message);
        setCode(initialState.code);
        setIsVerifying(false);
      }
    }

    // User is entering a new code so reset error state
    // (Ideally I would clear this using onFocus but it's not provided)
    if (error && value.length !== PINCOUNT) {
      setError(initialState.error);
    }
  };

  return (
    <Wrapper>
      {isVerifying ? (
        <ActivityIndicator size="large" color="#363836" />
      ) : (
        <InputWrapper>
          <OTPInputView
            code={code}
            autoFocusOnLoad
            pinCount={PINCOUNT}
            style={styles.otpView}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighlighted}
            onCodeChanged={value => handleOnChange(value)}
            clearInputs={error !== ''}
          />
          <ResendMessage>
            Need a new code?{' '}
            <PressableText onPress={() => handleResend()}>
              Press to resend{`${resendTimeout === 0 ? '' : ` in ${resendTimeout}`}`}
            </PressableText>
          </ResendMessage>
          <ChangeNumberMessage onPress={() => handleChangeNumber()}>Press to change number</ChangeNumberMessage>
        </InputWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #363836;
`;

const InputWrapper = styled.View``;

const ResendMessage = styled.Text`
  position: relative;
  top: -60px;
  right: 18px;
  text-align: right;
`;

const PressableText = styled.Text`
  font-weight: bold;
  color: black;
`;

const ChangeNumberMessage = styled.Text`
  position: relative;
  top: -55px;
  right: 18px;
  text-align: right;
  font-weight: bold;
  color: black;
`;

const styles = StyleSheet.create({
  otpView: {
    width: '80%',
    height: 200,
    color: '#363836',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#363836',
    borderBottomColor: '#363836',
  },
  underlineStyleHighlighted: {
    borderBottomWidth: 2,
  },
});

MobileVerificationScreen.defaultProps = defaultProps;
