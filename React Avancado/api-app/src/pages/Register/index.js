import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name && (name.length < 3 || name.length > 255)) {
      formErrors = true;
      toast.error('Field Name Must Have Between 3 and 255 Characters.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email must be Valid.');
    }

    if (password && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Field Password Must Have Between 6 and 50 Characters.');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        name,
        email,
        password,
      });
      toast.success('User Created Successfully.');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1> Create Your Account </h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">
          <FaCheck size={18} className="fa-check" />
          Enviar
        </button>
      </Form>
    </Container>
  );
}
