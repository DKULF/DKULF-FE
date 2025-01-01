import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/ItemOverviewCard',
  component: ItemOverviewCard,
} satisfies Meta<typeof ItemOverviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleImage = {
  data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
  ext: '.png',
  contentType: 'image/png',
};

const itemInfo = {
  title: '파란색 우산',
  date: '2024.12.31',
  tags: ['파란색', '우산', '공학관'],
  image: SampleImage,
  status: true,
};

export const Default: Story = {
  args: {
    itemInfo: itemInfo,
  },
};
