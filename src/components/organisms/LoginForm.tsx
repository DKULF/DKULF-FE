import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: (email: string, password: string) => void;
}

export const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
}: LoginFormProps) => {
  return (
    <form
      className="space-y-8 w-full flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(email, password);
      }}
    >
      <Input
        type="email"
        label="이메일"
        placeholder="학교 이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button size="large" type="submit">
        로그인
      </Button>
      <div className="text-center text-sm text-gray-600 mt-4">
        계정이 없으신가요?{' '}
        <a href="/signup" className="text-blue-500 hover:text-blue-600">
          회원가입
        </a>
      </div>
    </form>
  );
};
