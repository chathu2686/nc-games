import React from "react";

const Error = ({ isError }) => {
  return (
    <div>
      {isError ? (
        <strong>Sorry, Data Unavailable / does not exist!</strong>
      ) : null}
    </div>
  );
};

export default Error;
