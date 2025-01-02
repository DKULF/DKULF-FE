import { useState } from 'react';
import { LoginForm } from '@/components/organisms/LoginForm';
import { Header } from '@/components/organisms/Header';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    setErrorMessage('로그인 되었습니다.');
    alert('로그인 되었습니다.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header role="others" title="로그인" />
      <div className="px-4 mt-14 pt-16">
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
