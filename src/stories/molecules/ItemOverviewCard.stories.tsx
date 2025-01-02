import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { items } from '@/constants/dummyData';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/ItemOverviewCard',
  component: ItemOverviewCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: items[0].name,
    date: items[0].createdAt,
    tags: items[0].tags,
    image: items[0].image,
    status: items[0].status,
  },
} satisfies Meta<typeof ItemOverviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
