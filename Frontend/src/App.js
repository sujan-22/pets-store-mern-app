import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Components/Home";
import Inventory from "./Components/Inventory";
import Search from "./Components/Search";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="navbar">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/inventory" activeClassName="active">
                Inventory
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeClassName="active">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Routes */}
          <Route path="/" exact element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
