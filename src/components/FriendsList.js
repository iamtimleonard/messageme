import React from "react";
import { useMenuContext } from "../context/menu";

const friends = ["borp", "dimp", "elbow"];

const FriendsList = () => {
  const { selectRoom } = useMenuContext();
  return (
    <section className="menu__section">
      <h3 className="menu__subtitle">Friends</h3>
      <ul className="menu__list">
        {friends.map((friend, index) => {
          return (
            <li
              onClick={() => selectRoom(`chat with ${friend}`)}
              key={index}
              className="menu__list-item"
            >
              {friend}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FriendsList;
