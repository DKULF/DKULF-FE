import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from '@/components/molecules/SignUpForm';

const meta = {
  title: 'Molecules/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SignUpForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
