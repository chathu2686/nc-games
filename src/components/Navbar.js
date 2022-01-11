import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { getUsers } from "../utils/api";

const Navbar = ({ userName, setUserName }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [userNameError, setUserNameError] = useState(false);

  const handleUserNameValue = (event) => {
    setUserNameInput(event.target.value);
  };

  const handlePasswordValue = (event) => {
    setPasswordInput(event.target.value);
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

  const handleLogOut = () => {
    setUserName("");
  };

  return (
    <div className="nav-bar">
      <Link className="nav-link" to="/reviews">
        Reviews
      </Link>
      <Link className="nav-link" to="/users">
        Users
      </Link>
      {userName ? (
        <>
          <p>logged in as: {userName}</p>{" "}
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="userName">UserName</label>
          <input
            name="addUserName"
            id="addUserName"
            value={userNameInput}
            onChange={handleUserNameValue}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type={"password"}
            name="addPassword"
            id="addPassword"
            onChange={handlePasswordValue}
            value={passwordInput}
          ></input>
          <button>Login</button>
          {userNameError && <p>Sorry, Username and/or Password invalid!</p>}
        </form>
      )}
    </div>
  );
};

export default Navbar;
