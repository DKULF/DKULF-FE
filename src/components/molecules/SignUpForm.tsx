import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

export const SignUpForm = () => {
  return (
    <form className="space-y-4 w-full">
      <Input
        type="email"
        label="학교 이메일"
        placeholder="학교 이메일을 입력하세요"
        alertMessage="입력하신 이메일로 인증코드가 전송되었습니다!"
        buttonText="전송"
      />

      <Input
        type="email"
        label="인증코드"
        placeholder="받으신 인증코드를 입력하세요"
        alertMessage="이메일이 인증되었습니다!"
        isError={false}
        buttonText="인증"
      />

      <Input
        type="text"
        label="닉네임"
        placeholder="사용하실 닉네임을 입력하세요"
      />

      <Input
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
      />

      <Input
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력하세요"
        alertMessage="비밀번호가 일치하지 않습니다."
      />
      <Button size="large" type="submit">
        가입하기
      </Button>
    </form>
  );
};
