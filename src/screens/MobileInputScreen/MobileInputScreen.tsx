import styled from 'styled-components/native';
import React, { useState, useRef } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { passwordlessMobileLogin } from '@/api/auth';
import { MobileVerification } from '@/screens/routes';
import { Alert } from '@/utilities/alerts';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({
  error: '',
  value: '',
  formattedValue: '',
});

// @ts-ignore
export default function MobileInputScreen({ navigation }: Props): JSX.Element {
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState(initialState.value);
  const [formattedValue, setFormattedValue] = useState(initialState.formattedValue);

  const handleAlertClose = () => {
    setValue(initialState.value);
    setFormattedValue(initialState.formattedValue);
  };

  const showErrorAlert = (error: string) => {
    Alert('Error', error, handleAlertClose);
  };

  return (
    <Wrapper>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="US"
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
      <Button
        onPress={async () => {
          const isValid = phoneInput.current?.isValidNumber(value);
          const countryCode = phoneInput.current?.getCallingCode();
          if (countryCode && isValid) {
            try {
              const mobile = await passwordlessMobileLogin(countryCode, value);
              navigation.navigate(MobileVerification, { mobile });
            } catch (error) {
              showErrorAlert(error.message);
            }
          } else {
            showErrorAlert('Invalid phone number');
          }
        }}
      >
        <Text>Login</Text>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled(TouchableOpacity)`
  margin-top: 20px;
  height: 50px;
  width: 300px;
  justify-content: center;
  align-items: center;
  background-color: #7cdb8a;
  box-shadow: 10px 5px 5px black;
`;

MobileInputScreen.defaultProps = defaultProps;
