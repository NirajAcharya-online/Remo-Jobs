import React from "react";
const Error = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-lg font-medium text-red-600">Something went wrong</p>
      <p className="text-sm text-gray-500 mt-2 mb-4">
        We couldn’t load jobs. Please try again.
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 text-sm font-medium rounded-md
            bg-red-600 text-white hover:bg-red-700 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};
export default Error;
