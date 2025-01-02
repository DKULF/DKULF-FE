import { UserProfileCard } from '@/components/molecules/UserProfileCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/UserProfileCard',
  component: UserProfileCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    letter: '홍',
    name: '홍길동',
    email: '31234232@dankook.ac.kr',
    isLogin: true,
  },
};

export const LoggedOut: Story = {
  args: {
    letter: '로',
    name: '로그인해주세요',
    email: '클릭하시면 로그인 페이지로 이동합니다.',
    isLogin: false,
    onClick: () => alert('로그인 페이지로 이동'),
  },
};
