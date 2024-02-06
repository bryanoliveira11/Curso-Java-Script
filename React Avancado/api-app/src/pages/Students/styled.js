import styled from 'styled-components';

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
