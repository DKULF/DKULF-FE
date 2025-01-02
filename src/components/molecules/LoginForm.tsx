import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

export const LoginForm = () => {
  return (
    <form className="space-y-8 w-full flex flex-col">
      <Input
        type="email"
        label="이메일"
        placeholder="학교 이메일을 입력하세요"
      />
      <Input
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
      />
      <Button size="large" type="submit">
        로그인
      </Button>
      <div className="text-center text-sm text-gray-600 mt-4">
        계정이 없으신가요?{' '}
        <a href="/" className="text-blue-500 hover:text-blue-600">
          회원가입
        </a>
      </div>
    </form>
  );
};
