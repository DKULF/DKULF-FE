import { MenuItemButton } from '@/components/molecules/MenuItemButton';
import type { Meta, StoryObj } from '@storybook/react';
import { SquarePen } from 'lucide-react';

const meta = {
  title: 'Molecules/MenuItemButton',
  component: MenuItemButton,
} satisfies Meta<typeof MenuItemButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: SquarePen,
    label: '습득물 등록하기',
  },
};

export const Active: Story = {
  args: {
    icon: SquarePen,
    label: '습득물 등록하기',
  },
};
