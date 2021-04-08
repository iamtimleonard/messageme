import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  const setFalse = () => {
    setNewUser(false);
  };
  const setTrue = () => {
    setNewUser(true);
  };
  return (
    <div>
      {newUser ? (
        <Register isReturning={setFalse} />
      ) : (
        <Login isNew={setTrue} />
      )}
    </div>
  );
};

export default Auth;
