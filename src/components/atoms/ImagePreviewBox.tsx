interface ImagePreviewBoxProps {
  size?: 'sm' | 'lg';
  src?: string;
  alt?: string;
}
export const ImagePreviewBox = ({
  size = 'sm',
  src,
  alt = '',
}: ImagePreviewBoxProps) => {
  const sizeClasses = {
    sm: 'w-[85px] h-[85px] rounded-xl',
    lg: 'w-[380px] h-[200px] rounded-t-xl',
  };
  return (
    <div
      className={`shadow-md overflow-hidden ${sizeClasses[size]} bg-gray-200`}
    >
      <img src={src} className="w-full h-full object-cover" alt={alt} />
    </div>
  );
};
