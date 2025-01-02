import { TagList } from '@/components/atoms/TagList';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  args: {
    tags: ['우산', '공학관', '검정색'],
  },
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
