import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atoms/Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    size: 'large',
    children: '버튼',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    children: '가입하기',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: '인증',
  },
};
