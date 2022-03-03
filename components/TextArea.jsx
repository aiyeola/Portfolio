import React from "react";

const TextArea = ({ placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full border border-border rounded-md my-2 shadow-sm focus:outline-none px-3 bg-white h-32 resize-none"
    ></textarea>
  );
};

export default TextArea;
