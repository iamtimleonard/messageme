import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { useUserContext } from "./context/user";
import { SOCKET_SERVER_URL } from "./utils";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();
  const { user } = useUserContext();
  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      user: user,
      query: { roomId },
    });
    console.log(socketRef.current);

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
      window.scrollTo(0, document.body.scrollHeight);
    });

    return () => {
      setMessages([]);
      socketRef.current.disconnect();
    };
  }, [user, roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      ...messageBody,
    });
  };
  return { messages, sendMessage };
};

export default useChat;
