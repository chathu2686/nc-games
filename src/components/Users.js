import React, { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { LoadingContext } from "../contexts/LoadingContext";
import { ErrorContext } from "../contexts/ErrorContext";
import "./css/Users.css";

const Users = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsError } = useContext(ErrorContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getUsers()
      .then((usersFromApi) => {
        setUserList(usersFromApi);
        console.log(usersFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  });
  return (
    <section>
      {userList.map((user) => {
        return (
          <div key={user.username} className="user-block">
            Name: {user.name}
            <br />
            UserName: {user.username}
            <br />
            <img
              src={user.avatar_url}
              alt="user"
              width="200px"
              height="100px"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Users;
