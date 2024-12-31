import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/organisms/Header';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    role: 'landing',
    setIsMenuOpen: () => {},
  },
};

export const Others: Story = {
  args: {
    role: 'others',
    setIsMenuOpen: () => {},
  },
};
