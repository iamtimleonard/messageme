import React from "react";
import Conversation from "./Conversation";
import Menu from "./Menu";
import { useUserContext } from "../context/user";

const MainScreen = () => {
  const { user } = useUserContext();
  return (
    <main className="main">
      <h1 className="main__title">MessageMe</h1>
      <Conversation />
      <Menu user={user} />
    </main>
  );
};

export default MainScreen;
