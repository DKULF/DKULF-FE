import { SampleImage } from '@/assets';
import { ImageInput } from '@/components/atoms/ImageInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/ImageInput',
  component: ImageInput,
  argTypes: {
    imagePreview: { control: 'text' },
  },
  args: {
    imagePreview: SampleImage,
  },
} satisfies Meta<typeof ImageInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onImageChange: () => {},
    imagePreview: undefined,
  },
};

export const WithPreview: Story = {
  args: {
    onImageChange: () => {},
    imagePreview: SampleImage,
  },
};
