import React from "react";
import { useUserContext } from "../context/user";

const Message = ({ sender, text }) => {
  const { user } = useUserContext();
  return (
    <p
      className={`messages__message ${
        sender === user ? "messages--self" : "messages--receive"
      }`}
    >
      {`${sender === user ? "You" : sender}: ${text}`}
    </p>
  );
};

export default Message;
