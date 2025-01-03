import { useState } from 'react';
import { SignUpForm } from '@/components/organisms/SignUpForm';
import { useRequestEmailMutation } from '@/hooks/api/auth/useRequestEmailMutation';
import { useVerifyCodeMutation } from '@/hooks/api/auth/useVerifyCodeMutation';
import { useSignUpMutation } from '@/hooks/api/auth/useSignUpMutation';

const SignUpPage = () => {
  const [emailAlert, setEmailAlert] = useState('');
  const [codeAlert, setCodeAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');

  //회원가입 정보
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(0);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');

  const { requestMutate, requestMessage } = useRequestEmailMutation();
  const { verifyMutate, verifyMessage } = useVerifyCodeMutation();
  const { mutate: handleSignUp } = useSignUpMutation();

  const handleEmailSend = () => {
    requestMutate(email);
    setEmailAlert(requestMessage);
  };

  const handleCodeVerify = () => {
    verifyMutate({ email, code });
    setCodeAlert(verifyMessage);
  };

  const handlePasswordCheck = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordAlert('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordAlert('');
    }
  };

  const handleSubmit = (
    email: string,
    nickname: string,
    password: string,
    passwordConfirm: string,
  ) => {
    const formData = {
      email,
      password,
      passwordConfirm,
      nickname,
    };
    handleSignUp(formData);
  };

  return (
    <div className="mt-10">
      <SignUpForm
        emailAlert={emailAlert}
        codeAlert={codeAlert}
        passwordAlert={passwordAlert}
        email={email}
        verifyCode={code}
        password={password}
        passwordConfirm={passwordConfirm}
        nickname={nickname}
        setEmail={setEmail}
        setVerifyCode={setCode}
        setPassword={setPassword}
        setPasswordConfirm={setPasswordConfirm}
        setNickname={setNickname}
        handleEmailSend={handleEmailSend}
        handleCodeVerify={handleCodeVerify}
        handlePasswordCheck={handlePasswordCheck}
        handleSignUp={handleSubmit}
      />
    </div>
  );
};

export default SignUpPage;
