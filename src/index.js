import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserNameContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { ErrorProvider } from "./contexts/ErrorContext";

ReactDOM.render(
  <ErrorProvider>
    <LoadingProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </LoadingProvider>
  </ErrorProvider>,
  document.getElementById("root")
);
