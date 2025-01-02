import { Avatar } from '@/components/atoms/Avatar';
import { UserInfo } from '@/components/atoms/UserInfo';
import { UserProfileCardProps } from '@/types/Sidebar';

export const UserProfileCard = ({
  letter,
  name,
  email,
  isLogin,
  onClick,
}: UserProfileCardProps) => {
  return (
    <div
      className={`p-4 border-b ${isLogin ? '' : 'cursor-pointer hover:bg-slate-50 transition-colors'}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <Avatar letter={letter} />
        <UserInfo name={name} email={email} isLogin={isLogin} />
      </div>
    </div>
  );
};
