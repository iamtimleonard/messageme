import React from "react";
import RoomsList from "./RoomsList";
import FriendsList from "./FriendsList";

const Menu = () => {
  return (
    <aside>
      <h1>Menu</h1>
      <RoomsList />
      <FriendsList />
    </aside>
  );
};

export default Menu;
