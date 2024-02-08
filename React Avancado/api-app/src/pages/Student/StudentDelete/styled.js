import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const StudentContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;

  h1,
  p {
    font-weight: 500;
    padding: 2px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: start;

  .btn {
    cursor: pointer;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms ease-in-out;
    width: 50%;
    text-align: center;
    font-size: 15px;
    margin: 0 10px 0 0;

    &:hover {
      filter: brightness(85%);
    }
  }

  .btn-ok {
    background: ${colors.successColor};
  }

  .btn-cancel {
    background: ${colors.primaryColor};
  }
`;
