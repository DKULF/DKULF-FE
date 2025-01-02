/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { RegisterForm } from '@/components/organisms/RegisterForm';
import { useNavigate } from 'react-router-dom';

const RegisterItemPage = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

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

  const handleSubmit = () => {
    alert('등록 완료');
    navigate('/');
  };

  return (
    <div className="mt-10">
      <RegisterForm
        imagePreview={imagePreview}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterItemPage;
