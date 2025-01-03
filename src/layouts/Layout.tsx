/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/organisms/Header';
import { MenuProvider } from '@/contexts/MenuProvider';
import { useMenu } from '@/contexts/MenuContext';
import { PATH } from '@/constants/path';

const HEADER_PROPS: Record<
  (typeof PATH)[keyof typeof PATH],
  { role: 'landing' | 'others' | 'admin'; title: string }
> = {
  [PATH.LANDING]: { role: 'landing', title: '분실물 찾기' },
  [PATH.LOGIN]: { role: 'others', title: '로그인' },
  [PATH.SIGN_UP]: { role: 'others', title: '회원가입' },
  [PATH.REGISTER_ITEM]: { role: 'others', title: '습득물 등록' },
  [PATH.ITEM_DETAIL]: { role: 'others', title: '습득물 정보' },
  [PATH.ADMIN]: { role: 'admin', title: '습득물 관리' },
  [PATH.ADMIN_LOGIN]: { role: 'admin', title: '관리자 로그인' },
};
const LayoutContent = () => {
  const location = useLocation();
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  const headerProps = HEADER_PROPS[
    location.pathname as keyof typeof HEADER_PROPS
  ] || {
    role: 'others',
    title: '페이지',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        {...headerProps}
        setIsMenuOpen={location.pathname === '/' ? setIsMenuOpen : undefined}
      />
      <main className="px-4 pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export const Layout = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <MenuProvider>
        <LayoutContent />
      </MenuProvider>
    );
  }

  return <LayoutContent />;
};
