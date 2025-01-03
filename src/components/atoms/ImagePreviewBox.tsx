import { ItemImage } from '@/types/Item';

interface ImagePreviewBoxProps {
  size?: 'sm' | 'lg';
  image: ItemImage;
  alt?: string;
}
export const ImagePreviewBox = ({
  size = 'sm',
  image,
  alt = '',
}: ImagePreviewBoxProps) => {
  const imageSrc = `data:${image.contentType};base64,${image.data}`;
  const sizeClasses = {
    sm: 'w-[85px] h-[85px] rounded-xl',
    lg: 'w-full h-[200px] rounded-t-xl',
  };
  return (
    <div
      className={`shadow-md overflow-hidden ${sizeClasses[size]} bg-gray-200`}
    >
      <img src={imageSrc} className="w-full h-full object-cover" alt={alt} />
    </div>
  );
};
