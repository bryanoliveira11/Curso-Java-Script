import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #c9c5c5;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    transition: all 150ms ease-in-out;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  button[type='submit'] {
    font-size: 18px;
  }

  .fa-check {
    margin-right: 5px;
  }
`;
