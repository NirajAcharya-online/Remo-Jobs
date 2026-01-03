import React, { Children } from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-gray-500",
  textColor = "text-black-500",

  className = "px-4 py-1 h-3 w-3",

  ...props
}) {
  return (
    <button
      className={` ${className} rounded-lg ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
