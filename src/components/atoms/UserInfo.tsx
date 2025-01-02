import { UserInfoProps } from '@/types/Sidebar';

export const UserInfo = ({ name, email, isLogin }: UserInfoProps) => {
  return (
    <div>
      <div className="font-semibold">{name}</div>
      <div className={`${isLogin ? 'text-sm' : 'text-[10px]'}  text-gray-600`}>
        {email}
      </div>
    </div>
  );
};
