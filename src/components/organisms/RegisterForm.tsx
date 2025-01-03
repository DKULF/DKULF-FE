import { ImageInput } from '@/components/atoms/ImageInput';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { useState } from 'react';

interface RegisterFormProps {
  imagePreview: string;
  onImageChange: (file: File | null) => void;
  onSubmit: (name: string, tags: string) => void;
}

export const RegisterForm = ({
  imagePreview,
  onImageChange,
  onSubmit,
}: RegisterFormProps) => {
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(name, tags);
  };

  return (
    <form className="space-y-8 w-full flex flex-col" onSubmit={handleSubmit}>
      <Input
        type="text"
        label="습득물 명"
        placeholder="습득한 물건의 이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        label="태그"
        placeholder="태그를 콤마로 구분하여 입력하세요 (예: 공학관, 지갑)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="placeholder:text-xs"
      />
      <ImageInput onImageChange={onImageChange} imagePreview={imagePreview} />
      <Button size="large" type="submit">
        등록하기
      </Button>
    </form>
  );
};
