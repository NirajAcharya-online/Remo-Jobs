import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block text-xs text-gray-800 mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        className={`px-3 py-2 border-2 border-b-blue-300 shadow-2xl rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className}`}
        {...props}
      />
    </div>
  );
});
export default Input;