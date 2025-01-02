import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { menuItems } from '@/constants/menuItems';
import { userProfile } from '@/constants/userProfile';
import { LogOut, SquarePen } from 'lucide-react';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const loginedMenuItems = [
  {
    id: 'register-item',
    icon: SquarePen,
    text: '습득물 등록하기',
    route: '/register-item',
  },
  { id: 'logout', icon: LogOut, text: '로그아웃', route: '/' },
];

const loginedUserProfile = {
  name: '서유빈',
  email: '31234232@dankook.ac.kr',
};

export const LoggedIn: Story = {
  args: {
    setIsMenuOpen: () => console.log('Menu toggled'),
    menuItems: loginedMenuItems,
    userProfile: loginedUserProfile,
    isLogin: true,
  },
};

export const LoggedOut: Story = {
  args: {
    setIsMenuOpen: () => console.log('Menu toggled'),
    menuItems,
    userProfile,
    isLogin: false,
  },
};
