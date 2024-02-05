import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  // useDispatch will send a action to the reducer
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BTN_CLICKED',
    });
  }

  return (
    <Container>
      <Title>
        Login
        <small> Olá </small>
      </Title>
      <Paragraph> lorem ipsum dolor sit amet</Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
