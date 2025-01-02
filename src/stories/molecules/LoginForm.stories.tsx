import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '@/components/molecules/LoginForm';

const meta = {
  title: 'Molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
