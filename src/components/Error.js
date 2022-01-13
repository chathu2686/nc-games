import { useContext } from "react";
import { ErrorContext } from "../contexts/ErrorContext";
import React from "react";

const Error = () => {
  const { isError } = useContext(ErrorContext);

  return (
    <div>
      {isError ? (
        <strong>Sorry, Data Unavailable / does not exist!</strong>
      ) : null}
    </div>
  );
};

export default Error;
