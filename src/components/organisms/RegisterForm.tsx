import { ImageInput } from '@/components/atoms/ImageInput';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

interface RegisterFormProps {
  imagePreview: string;
  onImageChange: (file: File | null) => void;
  onSubmit: () => void;
}

export const RegisterForm = ({
  imagePreview,
  onImageChange,
  onSubmit,
}: RegisterFormProps) => {
  return (
    <form
      className="space-y-8 w-full flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        type="text"
        label="습득물 명"
        placeholder="습득한 물건의 이름을 입력하세요"
      />
      <Input
        type="text"
        label="태그"
        placeholder="관련 태그를 입력하세요 (예: 공학관, 지갑)"
      />
      <ImageInput onImageChange={onImageChange} imagePreview={imagePreview} />
      <Button size="large" type="submit">
        등록하기
      </Button>
    </form>
  );
};
