import { useState } from "react";
import { getUsers } from "../utils/api";

export const useLogin = (userName, setUserName) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [userNameError, setUserNameError] = useState(false);

  const handleLogOut = () => {
    setUserName("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setUserNameError(false);
    getUsers().then((usersFromApi) => {
      if (
        usersFromApi
          .map((user) => (user = user.username))
          .indexOf(userNameInput) !== -1 &&
        passwordInput !== ""
      ) {
        setUserName(userNameInput);
      } else {
        setUserNameError(true);
      }
      setUserNameInput("");
      setPasswordInput("");
    });
  };

  const handleUserNameValue = (event) => {
    setUserNameInput(event.target.value);
  };

  const handlePasswordValue = (event) => {
    setPasswordInput(event.target.value);
  };

  return {
    handleLogOut,
    handleLogin,
    userNameInput,
    handleUserNameValue,
    handlePasswordValue,
    passwordInput,
    userNameError,
  };
};
