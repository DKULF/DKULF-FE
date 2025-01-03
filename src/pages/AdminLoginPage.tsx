import { useState } from 'react';
import { LoginForm } from '@/components/organisms/LoginForm';
import { useLoginMutation } from '@/hooks/api/auth/useLoginMutation';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: handleLogin } = useLoginMutation('admin');

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
        role="admin"
      />
    </div>
  );
};

export default AdminLoginPage;
