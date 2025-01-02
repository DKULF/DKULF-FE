import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

interface SignUpFormProps {
  emailAlert: string;
  codeAlert: string;
  passwordAlert: string;
  handleEmailSend: () => void;
  handleCodeVerify: () => void;
  handlePasswordCheck: (password: string, confirmPassword: string) => void;
  handleSignUp: () => void;
}

export const SignUpForm = ({
  emailAlert,
  codeAlert,
  passwordAlert,
  handleEmailSend,
  handleCodeVerify,
  handlePasswordCheck,
  handleSignUp,
}: SignUpFormProps) => {
  return (
    <form
      className="space-y-4 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp();
      }}
    >
      <Input
        type="email"
        label="학교 이메일"
        placeholder="학교 이메일을 입력하세요"
        alertMessage={emailAlert}
        buttonText="전송"
        onButtonClick={handleEmailSend}
      />

      <Input
        type="text"
        label="인증코드"
        placeholder="받으신 인증코드를 입력하세요"
        alertMessage={codeAlert}
        buttonText="인증"
        onButtonClick={handleCodeVerify}
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
        onChange={(e) =>
          handlePasswordCheck(
            e.target.value,
            (document.getElementById('confirm-password') as HTMLInputElement)
              ?.value || '',
          )
        }
      />

      <Input
        type="password"
        id="confirm-password"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력하세요"
        alertMessage={passwordAlert}
        isError={!!passwordAlert}
        onChange={(e) =>
          handlePasswordCheck(
            (document.getElementById('password') as HTMLInputElement)?.value ||
              '',
            e.target.value,
          )
        }
      />

      <Button size="large" type="submit">
        가입하기
      </Button>
    </form>
  );
};
