import React, { Children } from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-gray-500",
  textColor = "text-black-500",
  ...props
}) {
  return (
    <button
      className={`px-4 py-1 rounded-lg ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
