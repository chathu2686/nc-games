import React, { useState, useEffect } from "react";
import { getUsers } from "../utils/api";
import "./css/Users.css";

const Users = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUserList(usersFromApi);
      console.log(usersFromApi);
    });
  }, []);
  return (
    <section>
      {userList.map((user) => {
        return (
          <div key={user.username} className="user-block">
            Name: {user.name}
            <br />
            UserName: {user.username}
            <br />
            <img src={user.avatar_url} alt="user" width="300" height="200" />
          </div>
        );
      })}
    </section>
  );
};

export default Users;
