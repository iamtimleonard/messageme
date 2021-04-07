import Messages from "./Messages";
import Input from "./Input";
import useChat from "../socket";

const Conversation = () => {
  const { messages, sendMessage } = useChat();

  let handleNewMessage = (msg) => {
    sendMessage(msg);
  };
  return (
    <div className="main__container">
      <Messages messages={messages} />
      <Input handleNewMessage={handleNewMessage} />
    </div>
  );
};

export default Conversation;
