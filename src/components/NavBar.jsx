import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LogOut from "./Authentication/Logout";
import AuthListener from "./Hooks/AuthListstner";
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const user = useSelector((state) => state.user.userDetails);
  const showButtons = !user && pathName !== "/login" && pathName !== "/signup";
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <nav className="h-10 w-11/12 m-auto  flex justify-between  items-center">
      <AuthListener />
      <ul className="flex gap-20 p-2.5 text-blue-400 font-sans font-bold justify-center items-center  ">
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

      <div className="mt-2 flex items-center gap-10">
        {!showButtons && (
          <h2 className=" text-center text-xs text-blue-400 font-bold ">
            Welcome {user ? user.displayName : "Guest"}
          </h2>
        )}
        {user && (
          <div>
            <LogOut />
          </div>
        )}
        {showButtons && (
          <div className="">
            <button
              onClick={handleLogin}
              className="py-1 rounded-2xl border hover:scale-3d border-green-300 hover:bg-green-400 cursor-pointer font-serif px-3 bg-green-300 ml-2"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="py-1 rounded-2xl border border-blue-300  cursor-pointer font-serif px-3  ml-2"
            >
              Sign-Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
