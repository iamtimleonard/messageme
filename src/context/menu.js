import { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const openMenu = () => {
    setMenuIsOpen(true);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };
  return (
    <MenuContext.Provider value={(menuIsOpen, openMenu, closeMenu)}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
