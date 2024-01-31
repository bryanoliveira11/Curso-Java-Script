import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small> Olá </small>
      </Title>
      <Paragraph> lorem ipsum dolor sit amet</Paragraph>
    </Container>
  );
}
