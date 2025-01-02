import { NoticeBoard } from '@/components/atoms/NoticeBoard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/NoticeBoard',
  component: NoticeBoard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NoticeBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
