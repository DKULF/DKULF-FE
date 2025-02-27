import { AvatarProps } from '@/types/Sidebar';

export const Avatar = ({ letter, className = '' }: AvatarProps) => {
  return (
    <div
      className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center ${className}`}
    >
      <span className="text-white text-md font-semibold">{letter}</span>
    </div>
  );
};
