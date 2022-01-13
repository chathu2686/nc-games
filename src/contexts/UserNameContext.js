import { createContext, useState } from "react";

export const UserNameContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};
