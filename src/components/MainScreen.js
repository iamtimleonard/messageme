import React from "react";
import Conversation from "./Conversation";
import Menu from "./Menu";
import { useUserContext } from "../context/user";

const MainScreen = () => {
  const { user } = useUserContext();
  return (
    <main>
      <h1>Welcome {user}</h1>
      <Conversation />
      <Menu />
    </main>
  );
};

export default MainScreen;
