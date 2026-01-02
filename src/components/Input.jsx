import React, { useState } from "react";

function Input({ children, placeholder = "", value, setValue }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default Input;
