import { LucideIcon } from 'lucide-react';

interface MenuIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export const MenuIcon = ({
  icon: Icon,
  size = 20,
  className = '',
}: MenuIconProps) => {
  return <Icon size={size} className={className} />;
};
