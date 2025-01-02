import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/atoms/Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    label: {
      control: 'text',
    },
    isError: {
      control: 'boolean',
    },
    alertMessage: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
  args: {
    label: '이메일',
    placeholder: '학교 이메일을 입력하세요',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SuccessMessage: Story = {
  args: {
    label: '학교 이메일',
    placeholder: '학교 이메일을 입력하세요',
    alertMessage: '입력하신 이메일로 인증코드가 전송되었습니다.',
    isError: false,
  },
};

export const ErrorMessage: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    alertMessage: '비밀번호는 8자 이상이어야 합니다.',
    isError: true,
  },
};
