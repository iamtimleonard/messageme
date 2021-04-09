import React from "react";
import { Link } from "react-router-dom";
import useChat from "../socket";
import { useMenuContext } from "../context/menu";

const rooms = ["Main", "Sports", "TV", "Music"];

const RoomsList = () => {
  const { selectRoom } = useMenuContext();
  const handleRoomChange = (room) => {
    selectRoom(room);
  };
  return (
    <section className="menu__section">
      <h3 className="menu__subtitle">Rooms</h3>
      <ul className="menu__list">
        {rooms.map((room, index) => (
          <li
            onClick={() => handleRoomChange(room)}
            key={index}
            className="menu__list-item"
          >
            <Link className="menu__link" to={`/${room}`}>
              {room}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoomsList;
