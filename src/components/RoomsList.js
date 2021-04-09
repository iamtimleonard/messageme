import React from "react";
import { useMenuContext } from "../context/menu";

const rooms = ["Main", "Sports", "TV", "Music"];

const RoomsList = () => {
  const { selectRoom } = useMenuContext();
  return (
    <section className="menu__section">
      <h3 className="menu__subtitle">Rooms</h3>
      <ul className="menu__list">
        {rooms.map((room, index) => (
          <li
            onClick={() => selectRoom(`MessageMe: ${room}`)}
            key={index}
            className="menu__list-item"
          >
            {room}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoomsList;
