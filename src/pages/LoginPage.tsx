import { useState } from 'react';
import { LoginForm } from '@/components/organisms/LoginForm';
import { useLoginMutation } from '@/hooks/api/auth/useLoginMutation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: handleLogin } = useLoginMutation();

  const handleSubmit = (email: string, password: string) => {
    const formData = {
      email,
      password,
    };
    handleLogin(formData);
  };

  return (
    <div className="mt-20">
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={(email, password) => handleSubmit(email, password)}
      />
    </div>
  );
};

export default LoginPage;
