import { ContactCard } from '@/components/atoms/ContactCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/ContactCard',
  component: ContactCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContactCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
