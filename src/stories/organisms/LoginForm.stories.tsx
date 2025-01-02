import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '@/components/organisms/LoginForm';

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: '',
    password: '',
    setEmail: (value) => console.log('Email updated:', value),
    setPassword: (value) => console.log('Password updated:', value),
    handleLogin: () => alert('로그인 성공!'),
  },
};
