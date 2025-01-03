import { postLogin } from '@/api/auth';
import { SignUpForm } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: Pick<SignUpForm, 'email' | 'password'>) =>
      postLogin(data),
    onSuccess: async (responseData) => {
      localStorage.setItem('accessToken', responseData.token.accessToken);
      localStorage.setItem('refreshToken', responseData.token.refreshToken);

      alert('로그인되었습니다!');
      navigate('/');
    },
    onError: (error) => {
      console.error(error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
