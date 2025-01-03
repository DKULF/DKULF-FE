import { postSignUp } from '@/api/auth';
import { SignUpForm } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (
      form: Pick<
        SignUpForm,
        'email' | 'nickname' | 'password' | 'passwordConfirm'
      >,
    ) => postSignUp(form),
    onSuccess: (data) => {
      console.log('회원가입 성공:', data);
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
