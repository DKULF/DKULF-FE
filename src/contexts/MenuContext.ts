import { createContext, useContext } from 'react';

export const MenuContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const useMenu = () => useContext(MenuContext);
