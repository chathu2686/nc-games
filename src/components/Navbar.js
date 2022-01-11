import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <Link className="navLink" to="/reviews">
        Reviews
      </Link>
      <Link className="navLink" to="/users">
        Users
      </Link>
      <Link className="navLink" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
