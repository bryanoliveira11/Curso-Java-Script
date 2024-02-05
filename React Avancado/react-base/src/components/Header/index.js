import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Header() {
  const btnClicked = useSelector((state) => state.btnClicked);

  return (
    <Nav>
      <Link to="/" title="Home">
        <FaHome size={24} />{' '}
      </Link>

      <Link to="/login" title="Login">
        <FaUserAlt size={24} />{' '}
      </Link>

      <Link to="/logout" title="Logout">
        <FaSignInAlt size={24} />{' '}
      </Link>

      {btnClicked ? 'Clicked' : 'Not Clicked'}
    </Nav>
  );
}
