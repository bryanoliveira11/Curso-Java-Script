import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="oi" title="Home">
        <FaHome size={24} />{' '}
      </a>
      <a href="oi" title="Login">
        <FaUserAlt size={24} />{' '}
      </a>
      <a href="oi" title="Logout">
        <FaSignInAlt size={24} />{' '}
      </a>
    </Nav>
  );
}
