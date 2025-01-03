import { SummaryCard } from '@/components/atoms/SummaryCard';
import { items } from '@/constants/dummyData';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/SummaryCard',
  component: SummaryCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    totalItems: items,
  },
} satisfies Meta<typeof SummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
