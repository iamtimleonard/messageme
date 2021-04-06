import { useState } from "react";
import Messages from "./Messages";
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
  const [activeMessages, setActiveMessages] = useState(messages);
  let handleNewMessage = (msg) => {
    setActiveMessages((prevValue) => [...prevValue, msg]);
  };
  return (
    <div className="main__container">
      <Messages messages={activeMessages} />
      <Input handleNewMessage={handleNewMessage} />
    </div>
  );
};

export default Conversation;
