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
      <Link className="review-link" to="/reviews">
        Home
      </Link>
      <Link className="review-link" to="/categories">
        Categories
      </Link>
      <Link className="users-link" to="/users">
        Users
      </Link>
      {userName ? (
        <div className="login-box">
          <p className="logged-in">Logged in as: {userName}</p>{" "}
          <button onClick={handleLogOut}>Log out</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-box">
          <div>
            <label className="login-labels" htmlFor="add-user-name">
              Username
            </label>
            <input
              name="add-user-name"
              id="add-user-name"
              value={userNameInput}
              onChange={handleUserNameValue}
            ></input>
          </div>
          <div>
            <label className="login-labels" htmlFor="add-pass-word">
              Password{" "}
            </label>
            <input
              type={"password"}
              name="add-pass-word"
              id="add-pass-word"
              onChange={handlePasswordValue}
              value={passwordInput}
            ></input>
          </div>
          <div>
            <button id="login">Login</button>
            {userNameError && <p>Sorry, Username and/or Password invalid!</p>}
          </div>
        </form>
      )}
    </div>
  );
};

export default Navbar;
