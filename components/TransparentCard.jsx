import React from "react";

const TransparentCard = ({ right, left, children, className }) => {
  return (
    <div
      className={`border border-[#F3D1BF] px-6 md:px-12 p-12 rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export default TransparentCard;
