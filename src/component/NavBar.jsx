import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <div id="navbar" className="nav-links">
      {/* 👉 STEP 4b - Make NavLinks to navigate us Home (`/home`) and Shop (`/items`) */}
      <NavLink to="/">Search</NavLink>
      <NavLink to="/items">List of Players</NavLink>
    </div>
  );
}

export default Navbar;
