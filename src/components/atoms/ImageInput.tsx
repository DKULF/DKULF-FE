import { useState, ChangeEvent } from 'react';
import { Camera } from 'lucide-react';

interface ImageInputProps {
  onImageChange: (file: File | null) => void;
  imagePreview?: string;
}

export const ImageInput = ({
  onImageChange,
  imagePreview,
}: ImageInputProps) => {
  const [localPreview, setLocalPreview] = useState<string | null>(
    imagePreview || null,
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setLocalPreview(previewUrl);
    } else {
      setLocalPreview(null);
    }

    onImageChange(file);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2">사진 첨부</label>
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100"
        >
          {localPreview ? (
            <img
              src={localPreview}
              alt="Preview"
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center">
              <Camera className="w-8 h-8 text-gray-400 [stroke-width:1.25]" />
              <span className="mt-2 text-xs text-gray-500">
                사진을 촬영하거나 선택하세요
              </span>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};
