import React from "react";
import RoomsList from "./RoomsList";
import FriendsList from "./FriendsList";
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
      <RoomsList />
      <FriendsList />
    </aside>
  );
};

export default Menu;
