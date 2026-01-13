import React from "react";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";
import { Navigate } from "react-router-dom";

function LogOut() {
  const handleClick = () => {
    signOut(firebaseAuth);
    window.location.reload();
    <Navigate to={"/"} />;
  };
  return (
    <div>
      <button
        className="bg-red-400 hover:scale-105 hover:bg-red-500 text-blue-500 text-shadow-2xs cursor-pointer border-blue-200 v border p-2 rounded-2xl font-serif"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default LogOut;
