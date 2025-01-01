import { SearchBar } from '@/components/atoms/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/SearchBar',
  component: SearchBar,
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
