import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/students');
      const { data } = response;
      console.log(data);
    }
    getData();
  }, []);

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
