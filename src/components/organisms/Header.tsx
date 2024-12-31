import { ArrowLeft, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  role?: 'landing' | 'others';
  title?: string;
}

export const Header = ({
  setIsMenuOpen,
  role = 'landing',
  title = '분실물 찾기',
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleMainButtonClick = () => {
    if (role === 'landing') {
      setIsMenuOpen(true);
    } else {
      navigate('/');
    }
  };

  const Icon = role === 'landing' ? Menu : ArrowLeft;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="mx-auto bg-white shadow-sm w-full max-w-[430px] h-14 justify-between px-4 z-99999 relative flex items-center ">
        <button className="p-2 cursor-pointer" onClick={handleMainButtonClick}>
          <Icon className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="w-10" />
      </div>
    </header>
  );
};
