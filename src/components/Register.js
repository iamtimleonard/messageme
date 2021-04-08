import { useState } from "react";
import { useUserContext } from "../context/user";

const Login = ({ isReturning }) => {
  const { handleRegister } = useUserContext();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };

  const userLogin = (e) => {
    e.preventDefault();
    handleRegister(userInput);
    isReturning();
  };

  return (
    <>
      <div className="login__backdrop"></div>
      <div className="login">
        <h1 className="login__title">MessageMe Login</h1>
        <form
          autoComplete="off"
          className="login__form"
          onSubmit={(e) => userLogin(e)}
        >
          <input
            className="login__input"
            onChange={(e) => handleChange(e)}
            value={userInput.username}
            type="text"
            name="username"
            placeholder="enter username"
          />
          <input
            className="login__input"
            onChange={(e) => handleChange(e)}
            value={userInput.password}
            type="password"
            name="password"
            placeholder="enter password"
          />
          <input
            className="login__input"
            type="password"
            onChange={(e) => handleChange(e)}
            value={userInput.confirmPassword}
            placeholder="confirm password"
            name="confirmPassword"
          />
          <button className="login__btn">Register</button>
        </form>
        <button className="login__btn" onClick={isReturning}>
          Returning User?
        </button>
      </div>
    </>
  );
};

export default Login;
