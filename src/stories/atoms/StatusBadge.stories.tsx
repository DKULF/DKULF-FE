import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from '../../components/atoms/StatusBadge';

const meta = {
  title: 'Atoms/StatusBadge',
  component: StatusBadge,
  argTypes: {
    status: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  args: {
    status: true,
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
