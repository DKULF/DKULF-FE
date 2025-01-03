import { postLogin } from '@/api/auth';
import { getUser } from '@/api/auth';
import { SignUpForm } from '@/types/member';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Pick<SignUpForm, 'email' | 'password'>) =>
      postLogin(data),
    onSuccess: async (response) => {
      localStorage.setItem('accessToken', response.token.accessToken);
      localStorage.setItem('refreshToken', response.token.refreshToken);

      const userData = await queryClient.fetchQuery({
        queryKey: ['user'],
        queryFn: () => getUser(),
      });

      if (userData?.nickname && userData?.email) {
        localStorage.setItem('nickname', userData.nickname);
        localStorage.setItem('email', userData.email);
      }

      alert('로그인되었습니다!');
      navigate('/');
      window.location.reload();
    },
    onError: (error) => {
      console.error(error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
