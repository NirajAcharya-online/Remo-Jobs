import React from "react";
import { useNavigate } from "react-router-dom";

function Error({ message, navigateto="/" }) {
  const naviagte = useNavigate();
  const handleClick = () => {
    naviagte(`${navigateto.link}`);
  };
  return (
    <div
      className="max-w-md mx-auto mt-1 p-6 bg-red-100 border border-red-400 text-red-700 rounded-xl shadow-lg"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="h-6 w-6 text-red-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div>
          <p className="font-bold">Error: Something went wrong</p>
          <p className="text-sm">{message}</p>
          <p  onClick={handleClick} className="hover:cursor-pointer text-sm text-blue-300">
            {navigateto.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
