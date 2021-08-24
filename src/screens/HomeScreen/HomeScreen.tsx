import React from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home, RootStackParamList } from '@/screens/routes';

// @ts-ignore
type Props = NativeStackScreenProps<RootStackParamList, Home>;

export default function HomeScreen(props: Props): JSX.Element {
  return (
    <Container
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Title>Home screen</Title>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 28px;
`;
