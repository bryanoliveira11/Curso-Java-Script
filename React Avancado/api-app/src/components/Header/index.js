import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, SmallUserText } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(actions.logoutRequest());
  }

  return (
    <Nav>
      <Link to="/" title="Home">
        <FaHome size={24} />
      </Link>

      <Link to="/register" title="Register">
        <FaUserAlt size={24} />
      </Link>

      {isLoggedIn ? (
        <Link to="/logout" title="Logout" onClick={handleLogout}>
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login" title="Login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && (
        <SmallUserText>
          Logged as <Link to="/register">{user.name}</Link>
        </SmallUserText>
      )}
    </Nav>
  );
}
