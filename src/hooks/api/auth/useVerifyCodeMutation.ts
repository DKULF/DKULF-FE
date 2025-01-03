import { postEmailVerify } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';

interface VerifyParams {
  email: string;
  code: string | number;
}

export const useVerifyCodeMutation = (setAlert: (message: string) => void) => {
  return useMutation({
    mutationFn: ({ email, code }: VerifyParams) => postEmailVerify(email, code),
    onSuccess: () => {
      setAlert('이메일이 인증되었습니다!');
    },
    onError: (error) => {
      console.error('인증 실패:', error);
      setAlert('인증에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
