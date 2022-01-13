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
  const [isError, setIsError] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="main-header">Welcome to NC-Games</h1>
        <Navbar />
        <Loader />
        <Error />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/users" element={<Users />} />
          {/* <Route
            path="/reviews/:review_id/comments"
            element={
              <Comments setIsLoading={setIsLoading} setIsError={setIsError} />
            }
          /> */}
          <Route path="*" element={<Nopath />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
