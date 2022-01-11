import React, { useState, useEffect } from "react";
import { getUsers } from "../utils/api";

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
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.username}>
              Name: {user.name}
              <br />
              UserName: {user.username}
              <br />
              <img src={user.avatar_url} alt="user" width="300" height="200" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Users;
