import Link from 'next/link';
import { HeaderContainer } from './styled';
import { SITE_NAME } from '@/src/config/app-config';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">{SITE_NAME}</Link>
    </HeaderContainer>
  );
};
