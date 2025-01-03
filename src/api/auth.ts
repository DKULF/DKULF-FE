import authApiInstance from '@/api/authApiInstance';
import { END_POINT } from '@/constants/api';
import { SignUpForm } from '@/types/member';

export const postEmailRequest = async (email: string) => {
  const { data } = await authApiInstance.post(END_POINT.EMAIL_REQUEST, {
    email,
  });
  return data;
};

export const postEmailVerify = async (email: string, code: number | string) => {
  const { data } = await authApiInstance.post(END_POINT.EMAIL_VERIFY, {
    email,
    code,
  });
  return data;
};

export const postSignUp = async (
  form: Pick<SignUpForm, 'email' | 'nickname' | 'password' | 'passwordConfirm'>,
) => {
  const { data } = await authApiInstance.post(`${END_POINT.SIGN_UP}`, form);
  return data;
};

export const postLogin = async (
  form: Pick<SignUpForm, 'email' | 'password'>,
) => {
  const { data } = await authApiInstance.post(`${END_POINT.LOGIN}`, form);
  return data;
};

export const getUser = async () => {
  const { data } = await authApiInstance.get(`${END_POINT.USER}`);
  return data;
};
