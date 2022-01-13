import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Review from "./components/Review";
import Users from "./components/Users";
import Nopath from "./components/Nopath";
import Loader from "./components/Loader";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="main-header">NC-Gamexxxxxxxxxxxxxx</h1>
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
