import React from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-8xl font-extrabold text-emerald-600 mb-2">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Page not found
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you’re trying to access doesn’t exist or was moved. If you
          followed a bad link, that’s not on you.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium
              hover:bg-emerald-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
