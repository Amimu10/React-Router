import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <nav id="nav" className="flex gap-6 text-orange-600">
        <NavLink
          to="/"
          activeClassName="bg-orange-400 text-white"
          className={({ isActive }) =>
            isActive ? "bg-orange-400 text-white" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="bg-orange-400 text-white"
          className={({ isActive }) =>
            isActive ? "bg-orange-400 text-white" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/posts"
          activeClassName="bg-orange-400 text-white"
          className={({ isActive }) =>
            isActive ? "bg-orange-400 text-white" : ""
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="bg-orange-400 text-white"
          className={({ isActive }) =>
            isActive ? "bg-orange-400 text-white" : ""
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/users"
          activeClassName="bg-orange-400 text-white"
          className={({ isActive }) =>
            isActive ? "bg-orange-400 text-white" : ""
          }
        >
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
