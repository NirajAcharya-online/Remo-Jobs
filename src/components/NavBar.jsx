import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="h-10 w-4/5 m-auto flex justify-center items-center">
      <ul className="flex gap-20 p-2.5 text-blue-400 font-sans font-bold  justify-center items-center ">
        <li className="hover:text-xl delay-150">
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-xl delay-150">
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/jobs"
          >
            Explore Jobs
          </NavLink>
        </li>
        <li className="hover:text-xl delay-150">
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/tracker"
          >
            Saved Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
