import { SampleImage } from '@/assets';
import { ImagePreviewBox } from '@/components/atoms/ImagePreviewBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/ImagePreviewBox',
  component: ImagePreviewBox,
  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: { type: 'radio' },
    },
    src: { control: { type: 'text' } },
  },
  args: {
    size: 'sm',
    src: SampleImage,
  },
} satisfies Meta<typeof ImagePreviewBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
