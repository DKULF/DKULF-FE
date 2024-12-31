import { LucideIcon } from 'lucide-react';

export interface AvatarProps {
  letter: string;
  className?: string;
}

export interface UserProfile {
  name: string;
  email: string;
}

export interface MenuItem {
  id: string;
  icon: LucideIcon;
  text: string;
  route: string;
}

export interface SidebarProps {
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
