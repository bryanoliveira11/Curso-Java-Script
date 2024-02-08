import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
    transition: all 200ms ease-in-out;
  }

  a:hover {
    scale: 1.1;
  }
`;

export const SmallUserText = styled.small`
  color: #fff;
  font-size: 15px;
`;
