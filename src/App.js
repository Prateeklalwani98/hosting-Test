import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import AboutPage from "./components/About";
import HomePage from "./components/Home";

function App() {
  return (
    <Router>
      <h1>Hello World</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
