import { LucideIcon } from 'lucide-react';

export type UserProfile = {
  name: string;
  email: string;
};

export type MenuItem = {
  id: string;
  icon: LucideIcon;
  text: string;
  route: string;
};

export interface AvatarProps {
  letter: string;
  className?: string;
}

export interface SidebarProps {
  isLogin: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  menuItems: MenuItem[];
  userProfile: UserProfile;
}

export interface MenuItemButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface UserProfileCardProps {
  letter: string;
  name: string;
  email: string;
  isLogin: boolean;
  onClick?: () => void;
}

export interface UserInfoProps {
  name: string;
  email: string;
  isLogin: boolean;
}
