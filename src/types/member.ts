export interface SignUpForm {
  email: string;
  verificationCode: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

export interface SignUpFormProps {
  emailAlert: string;
  codeAlert: string;
  passwordAlert: string;
  email: string;
  verifyCode: string | number;
  password: string;
  passwordConfirm: string;
  nickname: string;
  setEmail: (value: string) => void;
  setVerifyCode: (value: number) => void;
  setPassword: (value: string) => void;
  setPasswordConfirm: (value: string) => void;
  setNickname: (value: string) => void;
  handleEmailSend: () => void;
  handleCodeVerify: () => void;
  handlePasswordCheck: (password: string, confirmPassword: string) => void;
  handleSignUp: (
    email: string,
    nickname: string,
    password: string,
    passwordConfirm: string,
  ) => void;
}
