import { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState("Main");
  const openMenu = () => {
    setMenuIsOpen(true);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };
  const selectRoom = (name) => {
    setActiveRoom(name);
    setMenuIsOpen(false);
  };
  return (
    <MenuContext.Provider
      value={{ menuIsOpen, openMenu, closeMenu, selectRoom, activeRoom }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
