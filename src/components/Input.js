import React from "react";

const Input = () => {
  return (
    <div className="main__input input">
      <form className="input__form">
        <input className="input__text-input" type="text" name="chat text" />
        <button className="input__btn-submit">Send</button>
      </form>
    </div>
  );
};

export default Input;
