import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getFirstLetter } from '@/utils/getFirstLetter';
import { UserProfileCard } from '@/components/molecules/UserProfileCard';
import { MenuItemButton } from '@/components/molecules/MenuItemButton';
import { MenuItem, SidebarProps } from '@/types/Sidebar';

export const Sidebar = ({
  setIsMenuOpen,
  menuItems,
  userProfile,
  isLogin,
}: SidebarProps) => {
  const navigate = useNavigate();
  const letter = getFirstLetter(userProfile.name);

  const handleClose = () => setIsMenuOpen(false);

  const handleNavigate = (menuItem: MenuItem, isLogout = false) => {
    if (isLogout) {
      localStorage.removeItem('accessToken');
    }
    navigate(menuItem.route);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">메뉴</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <UserProfileCard
          letter={letter}
          name={userProfile.name}
          email={userProfile.email}
          isLogin={isLogin}
          onClick={isLogin ? undefined : () => navigate('/login')}
        />
        {isLogin && (
          <div className="space-y-2 mt-6 flex flex-col">
            {menuItems.map((item, index) => {
              const isLogout = index === 1;
              return (
                <MenuItemButton
                  key={item.id}
                  icon={item.icon}
                  label={item.text}
                  onClick={() => handleNavigate(item, isLogout)}
                  className={isLogout ? 'text-red-600' : ''}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
