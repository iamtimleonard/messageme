import React from "react";
import hamburger from "../assets/icon-hamburger.svg";
import Conversation from "./Conversation";
import Menu from "./Menu";
import { useUserContext } from "../context/user";
import { useMenuContext } from "../context/menu";

const MainScreen = () => {
  const { user } = useUserContext();
  const { activeRoom, openMenu } = useMenuContext();
  return (
    <main className="main">
      <header className="main__header">
        <h1 className="main__title">{`${activeRoom}`}</h1>
        <button className="main__menu-toggle" onClick={openMenu}>
          <img className="main__hamburger" src={hamburger} alt="open menu" />
        </button>
      </header>

      <Conversation />
      <Menu user={user} />
    </main>
  );
};

export default MainScreen;
