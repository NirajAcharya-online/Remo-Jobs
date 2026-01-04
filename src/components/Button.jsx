import React, { useState } from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-gray-500",
  textColor = "text-black-500",

  className = "px-4 py-1 h-3 w-3",

  ...props
}) {
  const [selected, useSelected] = useState(false);
  return (
    <button
      className={` ${className} rounded-lg ${bgColor} ${textColor} 
      ${selected ? "bg-blue-400" : ""}
      `}
      onClick={() => {
        useSelected((prev) => !prev);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
