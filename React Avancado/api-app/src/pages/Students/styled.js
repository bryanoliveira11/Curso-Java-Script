import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #c9c5c5;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 42px;
    height: 42px;
    border-radius: 3px;
  }
`;

export const NewStudent = styled(Link)`
  display: block;
  padding-top: 10px;
  width: fit-content;

  .fa-plus {
    margin-right: 5px;
  }
`;
