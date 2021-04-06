import { useState } from "react";
import { useUserContext } from "../context/user";

const Input = ({ handleNewMessage }) => {
  const { user } = useUserContext();
  const [msgText, setMsgText] = useState("");
  const updateMsg = (e) => {
    setMsgText(e.target.value);
  };
  const msg = { sender: user, text: msgText };
  const sendMsg = (e) => {
    e.preventDefault();
    handleNewMessage(msg);
    setMsgText("");
  };
  return (
    <div className="main__input input">
      <form autoComplete="off" onSubmit={sendMsg} className="input__form">
        <input
          onChange={updateMsg}
          value={msgText}
          className="input__text-input"
          type="text"
          name="chat text"
        />
        <button className="input__btn-submit">Send</button>
      </form>
    </div>
  );
};

export default Input;
