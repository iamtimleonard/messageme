import React from "react";
import Message from "./Message";
import Input from "./Input";

const messages = [
  {
    sender: "John",
    text: "hey bro",
  },
  {
    sender: "Tim",
    text: "yo sup",
  },
  {
    sender: "John",
    text: "nmu",
  },
  {
    sender: "John",
    text: "wanna hang?",
  },
  {
    sender: "Alex",
    text: "you sup all",
  },
];

const Conversation = () => {
  return (
    <div className="main__container">
      <Message messages={messages} />
      <Input />
    </div>
  );
};

export default Conversation;
