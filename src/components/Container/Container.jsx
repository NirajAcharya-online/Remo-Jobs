import React from "react";

function Container({ children }) {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      {children}
    </div>
  );
}

export default Container;
