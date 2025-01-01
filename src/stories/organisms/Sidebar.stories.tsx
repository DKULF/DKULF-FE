import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { LogOut, SquarePen } from 'lucide-react';
import { BrowserRouter } from 'react-router-dom';

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

const menuItems = [
  {
    id: 'create-post',
    icon: SquarePen,
    text: '습득물 등록하기',
    route: '/courses',
  },
  { id: 'logout', icon: LogOut, text: '로그아웃', route: '/courses' },
];

const userProfile = {
  name: '서유빈',
  email: '31234232@dankook.ac.kr',
};

export const Default: Story = {
  args: {
    setIsMenuOpen: () => {},
    userProfile: userProfile,
    menuItems,
  },
};
