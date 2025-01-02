import { useState } from 'react';
import { SignUpForm } from '@/components/organisms/SignUpForm';
import { Header } from '@/components/organisms/Header';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [emailAlert, setEmailAlert] = useState('');
  const [codeAlert, setCodeAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');

  const handleEmailSend = () => {
    setEmailAlert('입력하신 이메일로 인증코드가 전송되었습니다!');
  };

  const handleCodeVerify = () => {
    setCodeAlert('이메일이 인증되었습니다!');
  };

  const handlePasswordCheck = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordAlert('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordAlert('');
    }
  };

  const handleSignUp = () => {
    alert('회원가입 되었습니다.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header role="others" title="회원가입" />
      <div className="px-4 mt-14 pt-12">
        <SignUpForm
          emailAlert={emailAlert}
          codeAlert={codeAlert}
          passwordAlert={passwordAlert}
          handleEmailSend={handleEmailSend}
          handleCodeVerify={handleCodeVerify}
          handlePasswordCheck={handlePasswordCheck}
          handleSignUp={handleSignUp}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
