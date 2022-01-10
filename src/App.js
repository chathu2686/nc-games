import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Review from "./components/Review";
import Users from "./components/Users";
import Comments from "./components/Comments";
import Nopath from "./components/Nopath";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reviews/:review_id/comments" element={<Comments />} />
          <Route path="*" element={<Nopath />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
