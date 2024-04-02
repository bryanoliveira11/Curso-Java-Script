import { styled, css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`;
