import { LogOut, SquarePen } from 'lucide-react';
export const menuItems = [
  {
    id: 'create-post',
    icon: SquarePen,
    text: '습득물 등록하기',
    route: '/register',
  },
  { id: 'logout', icon: LogOut, text: '로그아웃', route: '/' },
];
