import { createContext, useState, useContext } from "react";
import { SOCKET_SERVER_URL } from "../utils";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const handleLogin = (userInfo) => {
    fetch(`${SOCKET_SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUser(data.username);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
