import Messages from "./Messages";
import Input from "./Input";
import useChat from "../socket";

const Conversation = (props) => {
  let { roomId } = props.match.params;
  roomId = roomId === "Main" ? "/" : roomId;
  console.log(roomId);
  let { messages, sendMessage } = useChat(roomId);

  let handleNewMessage = (msg) => {
    console.log(messages);
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
