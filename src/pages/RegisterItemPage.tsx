import { useState } from 'react';
import { RegisterForm } from '@/components/organisms/RegisterForm';
import { useRegisterItemMutation } from '@/hooks/api/item/useRegisterItemMutation';

const RegisterItemPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const { mutate: registerItem } = useRegisterItemMutation();

  const handleImageChange = (file: File | null) => {
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      setImageFile(null);
      setImagePreview('');
    }
  };

  const handleSubmit = (name: string, tags: string) => {
    if (!imageFile) {
      alert('이미지를 선택해주세요.');
      return;
    }

    const formData = {
      name,
      tags,
      image: imageFile,
    };

    registerItem(formData);
  };

  return (
    <div className="mt-10">
      <RegisterForm
        imagePreview={imagePreview}
        onImageChange={handleImageChange}
        onSubmit={(name, tags) => handleSubmit(name, tags)}
      />
    </div>
  );
};

export default RegisterItemPage;
