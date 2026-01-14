import React from "react";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearStore } from "../../features/tracker/trackerSlice";

function LogOut() {
  const dispatch = useDispatch();
  const handleClick = () => {
    signOut(firebaseAuth);

    dispatch(clearStore());
    toast.success("Logged out sucessfully..!", {
      theme: "colored",
      autoClose: 1500,
      style: {
        fontWeight: "bold",
      },
    });

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
