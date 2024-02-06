import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  // getting the prev page from props using lodash get
  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email) || password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Invalid Credentials.');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  }

  return (
    <Container>
      <h1> Login </h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            value={password}
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">
          <FaCheck size={18} className="fa-check" />
          Login
        </button>
      </Form>
    </Container>
  );
}
