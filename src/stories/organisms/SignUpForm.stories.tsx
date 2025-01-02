import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from '@/components/organisms/SignUpForm';

const meta = {
  title: 'Organisms/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SignUpForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    emailAlert: '',
    codeAlert: '',
    passwordAlert: '',
    handleEmailSend: () => alert('이메일 전송!'),
    handleCodeVerify: () => alert('인증 완료!'),
    handlePasswordCheck: (password, confirmPassword) => {
      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
      }
    },
    handleSignUp: () => alert('회원가입 성공!'),
  },
};
