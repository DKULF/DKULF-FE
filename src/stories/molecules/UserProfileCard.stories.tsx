import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileCard } from '../../components/molecules/UserProfileCard';

const meta = {
  title: 'Molecules/UserProfileCard',
  component: UserProfileCard,
} satisfies Meta<typeof UserProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    letter: '홍',
    name: '홍길동',
    email: '31234232@dankook.ac.kr',
  },
};
