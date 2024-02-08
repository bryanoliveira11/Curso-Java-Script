import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form, LoginLink, SmallText } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  // user data comes from state.auth
  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.name);
  const emailStored = useSelector((state) => state.auth.user.email);

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // getting user data if user is logged and setting in the fields
  React.useEffect(() => {
    if (!id) return;
    setName(nameStored);
    setEmail(emailStored);
  }, [id, nameStored, emailStored]);

  function handleSubmit(e) {
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

    // without id
    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Field Password Must Have Between 6 and 50 Characters.');
    }

    // with id
    if (
      id &&
      password.length !== 0 &&
      (password.length < 6 || password.length > 50)
    ) {
      formErrors = true;
      toast.error('Field Password Must Have Between 6 and 50 Characters.');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ id, name, email, password }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1> {id ? 'Edit Your Data' : 'Create Your Account'} </h1>
      {id ? (
        ''
      ) : (
        <LoginLink>
          Already have an Account ?
          <Link to="/login/" className="redirect-link">
            Login.
          </Link>
        </LoginLink>
      )}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
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
          <SmallText>
            {id ? 'Will be Edited if you Send a Value' : ''}
          </SmallText>
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </label>

        <button type="submit">
          <FaCheck size={18} className="fa-check" />
          {id ? 'Edit' : 'Register'}
        </button>
      </Form>
    </Container>
  );
}
