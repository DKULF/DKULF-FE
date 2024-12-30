import { LucideIcon } from 'lucide-react';
import { MenuText } from '../atoms/MenuText';
import { MenuIcon } from '../atoms/MenuIcon';

export interface MenuItemButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const MenuItemButton = ({
  icon,
  label,
  onClick,
  className = '',
}: MenuItemButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer hover:bg-gray-100 ${className}`}
    >
      <MenuIcon icon={icon} />
      <MenuText text={label} />
    </button>
  );
};
