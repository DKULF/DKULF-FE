import React from 'react';
import { LucideIcon, X } from 'lucide-react';
import { UserProfileCard } from '../molecules/UserProfileCard';
import { getFirstLetter } from '../../utils/getFirstLetter';
import { MenuItemButton } from '../molecules/MenuItemButton';
import { useNavigate } from 'react-router-dom';

interface userProfile {
  name: string;
  email: string;
}

interface MenuItem {
  id: string;
  icon: LucideIcon;
  text: string;
  route: string;
}

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  menuItems: MenuItem[];
  userProfile: userProfile;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  menuItems,
  userProfile,
}) => {
  const navigate = useNavigate();
  if (!isMenuOpen) return null;
  const letter = getFirstLetter(userProfile.name);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">메뉴</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <UserProfileCard
          letter={letter}
          name={userProfile.name}
          email={userProfile.email}
        />
        <div className="space-y-2 mt-6 flex flex-col">
          <MenuItemButton
            icon={menuItems[0].icon}
            label={menuItems[0].text}
            onClick={() => {
              navigate(menuItems[0].route);
            }}
          />
          <MenuItemButton
            icon={menuItems[1].icon}
            label={menuItems[1].text}
            onClick={() => {
              localStorage.removeItem('accessToken');
              navigate(menuItems[1].route);
            }}
            className="text-red-600"
          />
        </div>
      </div>

      <div
        className="fixed inset-0 z-[-1]"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
};
