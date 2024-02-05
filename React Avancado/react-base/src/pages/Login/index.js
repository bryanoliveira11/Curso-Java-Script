import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  // useDispatch will send a action to the reducer
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.btnCliced());
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
