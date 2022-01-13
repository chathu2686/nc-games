import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { useLogin } from "../hooks/useLogin";
import { useContext } from "react";
import { UserNameContext } from "../contexts/UserNameContext";

const Navbar = () => {
  const { userName, setUserName } = useContext(UserNameContext);

  const {
    handleLogOut,
    handleLogin,
    userNameInput,
    handleUserNameValue,
    handlePasswordValue,
    passwordInput,
    userNameError,
  } = useLogin(userName, setUserName);

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
          <div>
            <label htmlFor="password">Password </label>
            <input
              type={"password"}
              name="addPassword"
              id="addPassword"
              onChange={handlePasswordValue}
              value={passwordInput}
            ></input>
          </div>
          <button>Login</button>
          {userNameError && <p>Sorry, Username and/or Password invalid!</p>}
        </form>
      )}
    </div>
  );
};

export default Navbar;
