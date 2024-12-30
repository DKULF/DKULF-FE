import type { Meta, StoryObj } from '@storybook/react';
import { StringTag } from '../../components/atoms/StringTag';

const meta = {
  title: 'Atoms/StringTag',
  component: StringTag,
  argTypes: {
    tag: { control: 'text' },
  },
  args: {
    tag: '우산',
  },
} satisfies Meta<typeof StringTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
