import React from "react";
import MenuList from "./MenuList";
import close from "../assets/icon-close.svg";
import { useMenuContext } from "../context/menu";

const Menu = () => {
  const { menuIsOpen, closeMenu } = useMenuContext();
  return (
    <aside className={menuIsOpen ? "menu menu--open" : "menu"}>
      <button onClick={closeMenu} className="menu__toggle">
        <img src={close} alt="close menu"></img>
      </button>
      <h2 className="menu__title">MessageMe</h2>
      <MenuList />
    </aside>
  );
};

export default Menu;
