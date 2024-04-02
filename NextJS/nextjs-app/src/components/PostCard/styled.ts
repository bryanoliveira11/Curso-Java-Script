import { styled, css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};

  img {
    width: 100%;
    display: block;
    border-radius: 0.4rem;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
