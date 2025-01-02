import { ItemInfo } from '@/components/molecules/ItemInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/ItemInfo',
  component: ItemInfo,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: '파란색 우산',
    status: true,
    date: '2024.12.28',
    tags: ['우산', '공학관', '파란색'],
  },
} satisfies Meta<typeof ItemInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
