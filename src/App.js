import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Review from "./components/Review";
import Users from "./components/Users";
import Comments from "./components/Comments";
import Nopath from "./components/Nopath";
import Loader from "./components/Loader";
import Error from "./components/Error";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="mainHeader">Welcome to NC-Games</h1>
        <Navbar userName={userName} setUserName={setUserName} />
        <Loader isLoading={isLoading} />
        <Error isError={isError} />
        <Routes>
          <Route
            path="/"
            element={
              <Reviews setIsLoading={setIsLoading} setIsError={setIsError} />
            }
          />
          <Route
            path="/reviews"
            element={
              <Reviews setIsLoading={setIsLoading} setIsError={setIsError} />
            }
          />
          <Route
            path="/reviews/:review_id"
            element={
              <Review setIsLoading={setIsLoading} setIsError={setIsError} />
            }
          />
          <Route
            path="/users"
            element={
              <Users setIsLoading={setIsLoading} setIsError={setIsError} />
            }
          />
          <Route
            path="/reviews/:review_id/comments"
            element={
              <Comments
                userName={userName}
                setIsLoading={setIsLoading}
                setIsError={setIsError}
              />
            }
          />
          <Route path="*" element={<Nopath setIsLoading={setIsLoading} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
