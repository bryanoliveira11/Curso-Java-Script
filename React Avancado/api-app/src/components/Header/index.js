import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/" title="Home">
        <FaHome size={24} />{' '}
      </Link>

      <Link to="/register" title="Register">
        <FaUserAlt size={24} />{' '}
      </Link>

      <Link to="/login" title="Login">
        <FaSignInAlt size={24} />{' '}
      </Link>
    </Nav>
  );
}
