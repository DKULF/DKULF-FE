import { Avatar } from '../atoms/Avatar';
import { UserInfo } from '../atoms/UserInfo';

interface UserProfileCardProps {
  letter: string;
  name: string;
  email: string;
}

export const UserProfileCard = ({
  letter,
  name,
  email,
}: UserProfileCardProps) => {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center space-x-3">
        <Avatar letter={letter} />
        <UserInfo name={name} email={email} />
      </div>
    </div>
  );
};
