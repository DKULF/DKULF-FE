/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from '@/components/organisms/Header';
import { RegisterForm } from '@/components/organisms/RegisterForm';
import { useState } from 'react';
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
    <div className="min-h-screen bg-gray-50">
      <Header role="others" title="습득물 등록" />
      <div className="px-4 mt-14 pt-12">
        <RegisterForm
          imagePreview={imagePreview}
          onImageChange={handleImageChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
export default RegisterItemPage;
