import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import * as colors from '../../config/colors';

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

export const Paginate = styled(ReactPaginate)`
  display: flex;
  align-items: start;
  margin-top: 25px;

  li a {
    cursor: pointer;
  }

  li.page-item a {
    font-size: 18px;
    margin: 0 5px 0 5px;
    padding: 4px 5px 4px 5px;
    border-radius: 4px;
    color: #fff;
    background: ${colors.primaryColor};
    transition: all 200ms ease-in-out;

    &:hover {
      padding: 7px;
    }
  }

  li.page-item.active a {
    background: ${colors.primarColorDark};
  }

  .arrow-left,
  .arrow-right {
    margin: 0 10px 0 10px;
  }
`;
