import { postEmailRequest } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';

export const useRequestEmailMutation = (
  setAlert: (message: string) => void,
) => {
  return useMutation({
    mutationFn: (email: string) => postEmailRequest(email),
    onSuccess: (data) => {
      console.log('인증 메일 전송 성공:', data);
      setAlert('입력하신 이메일로 인증코드가 전송되었습니다!');
    },
    onError: (error) => {
      console.error('인증 메일 전송 실패:', error);
      setAlert('인증 메일 전송에 실패했습니다. 다시 시도해 주세요.');
    },
  });
};
