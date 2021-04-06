import React from "react";
import RoomsList from "./RoomsList";
import FriendsList from "./FriendsList";

const Menu = () => {
  return (
    <aside className="menu">
      <h1 className="menu__title">Menu</h1>
      <RoomsList />
      <FriendsList />
    </aside>
  );
};

export default Menu;
