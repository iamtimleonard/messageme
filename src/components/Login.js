import { useState } from "react";
import { useUserContext } from "../context/user";

const Login = () => {
  const { handleLogin } = useUserContext();
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };

  const userLogin = (e) => {
    e.preventDefault();
    handleLogin(userInput);
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
          <button className="login__btn">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
