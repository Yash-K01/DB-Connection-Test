import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ViewUsers from "./pages/ViewUsers";

function App() {
  return (
    <BrowserRouter>

      <nav
        style={{
          background: "#222",
          padding: "15px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/"
        >
          Add User
        </Link>

        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/users"
        >
          View Users
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ViewUsers />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;