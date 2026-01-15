import React, { useState } from "react";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <nav className="w-full max-w-6xl mx-auto flex items-center justify-between p-6 relative">
      <AuthListener />

      <div className="text-lg font-bold text-blue-500">REMO-JOB</div>

      <ul className="hidden md:flex gap-8 text-blue-400 font-bold items-center">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        {!showButtons && (
          <span className="text-xs text-blue-400 font-bold">
            Welcome {user ? user.displayName : "Guest"}
          </span>
        )}
        {user && <LogOut />}
        {showButtons && (
          <>
            <button
              onClick={handleLogin}
              className="py-1 px-3 bg-green-300 border border-green-300 rounded-2xl hover:bg-green-400 transition"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="py-1 px-3 bg-blue-300 border border-blue-300 rounded-2xl hover:bg-blue-400 transition"
            >
              Sign-Up
            </button>
          </>
        )}
      </div>
      <div className="md:hidden flex  items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div
            className="w-6 h-0.5 bg-blue-400 mb-1 transition-transform"
            style={{
              transform: isMenuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          ></div>
          <div
            className={`w-6 h-0.5 bg-blue-400 mb-1 transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className="w-6 h-0.5 bg-blue-400 transition-transform"
            style={{
              transform: isMenuOpen
                ? "rotate(-45deg) translate(6px, -6px)"
                : "none",
            }}
          ></div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden py-4 gap-4 z-50">
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            className="text-blue-400 font-bold"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setIsMenuOpen(false)}
            className="text-blue-400 font-bold"
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          {!showButtons && (
            <span className="text-xs text-blue-400 font-bold">
              Welcome {user ? user.displayName : "Guest"}
            </span>
          )}
          {user && <LogOut />}
          {showButtons && (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleLogin}
                className="py-1 px-4 bg-green-300 border rounded-2xl hover:bg-green-400 transition"
              >
                Login
              </button>
              <button
                onClick={handleSignup}
                className="py-1 px-4 bg-blue-300 border rounded-2xl hover:bg-blue-400 transition"
              >
                Sign-Up
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
