import React from "react";

const Select = ({ placeholder, options }) => {
  return (
    <select
      name="options"
      id="options"
      className="w-full h-11 border border-border rounded-md my-2 shadow-sm focus:outline-none px-3 bg-white text-dark-gray"
      //   placeholder={placeholder}
      placeholder="Subject"
    >
      <option value="">Subject</option>
      {options.length > 0 &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
    </select>
  );
};

export default Select;
