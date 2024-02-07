import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Container } from '../../styles/GlobalStyles';
import { Form, LoginLink } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/Loading';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Field Name Must Have Between 3 and 255 Characters.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email must be Valid.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Field Password Must Have Between 6 and 50 Characters.');
    }

    if (formErrors) return;

    setIsLoading(true);

    try {
      await axios.post('/users/', {
        name,
        email,
        password,
      });
      toast.success('User Created Successfully.');
      setIsLoading(false);
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1> Create Your Account </h1>
      <LoginLink>
        Already have an Account ?
        <Link to="/login/" className="redirect-link">
          Login.
        </Link>
      </LoginLink>
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
          E-mail
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
          Register
        </button>
      </Form>
    </Container>
  );
}
