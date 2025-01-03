import { postEmailVerify } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

interface VerifyParams {
  email: string;
  code: number;
}

export const useVerifyCodeMutation = () => {
  const [verifyMessage, setVerifyMessage] = useState('');

  const emailVerify = useMutation({
    mutationFn: ({ email, code }: VerifyParams) => postEmailVerify(email, code),
    onSuccess: () => {
      setVerifyMessage('이메일이 인증되었습니다!');
    },
    onError: (error) => {
      console.error('인증 실패:', error);
      setVerifyMessage('인증에 실패했습니다. 다시 시도해주세요.');
    },
  });

  return {
    verifyMessage,
    verifyMutate: emailVerify.mutate,
  };
};
