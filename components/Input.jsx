import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-11 border border-border rounded-md my-2 shadow-sm focus:outline-none px-3"
    />
  );
};

export default Input;
