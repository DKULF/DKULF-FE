import { SampleImage } from '@/assets';
import { RegisterForm } from '@/components/organisms/RegisterForm';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imagePreview: {
      control: 'text',
    },
    onImageChange: {
      action: 'imageChanged',
    },
    onSubmit: {
      action: 'formSubmitted',
    },
  },
  args: {
    imagePreview: '',
  },
} satisfies Meta<typeof RegisterForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imagePreview: '',
    onImageChange: () => {},
    onSubmit: () => {},
  },
};

export const WithImagePreview: Story = {
  args: {
    imagePreview: SampleImage,
    onImageChange: () => {},
    onSubmit: () => {},
  },
};
