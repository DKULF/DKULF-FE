interface UserInfoProps {
  name: string;
  email: string;
}

export const UserInfo = ({ name, email }: UserInfoProps) => {
  return (
    <div>
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-600">{email}</div>
    </div>
  );
};
