import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <nav id="navbar" className="nav-links">
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/players">Player List</NavLink>
    </nav>
  );
}

export default Navbar;
