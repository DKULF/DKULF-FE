import { useState } from 'react';
import { LoginForm } from '@/components/organisms/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('로그인 되었습니다.');
    navigate('/');
  };

  return (
    <div className="mt-20">
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
