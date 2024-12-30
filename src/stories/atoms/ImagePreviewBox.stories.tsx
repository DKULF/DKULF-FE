import type { Meta, StoryObj } from '@storybook/react';
import { ImagePreviewBox } from '../../components/atoms/ImagePreviewBox';
import { SampleImage } from '../../assets';

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
