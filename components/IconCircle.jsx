import React from "react";

const IconCircle = ({ variant, icon, size }) => {
  const variantStyle =
    variant === "dark"
      ? "bg-primary"
      : variant === "light"
      ? "bg-white shadow-md"
      : "bg-accent";

  const sizeStyle = size === "sm" ? "h-[48px] w-[48px]" : null;

  return (
    <div
      className={`w-[80px] h-[80px] flex justify-center items-center rounded-full ${variantStyle} ${sizeStyle}`}
    >
      <img src={icon} alt="" />
    </div>
  );
};

export default IconCircle;
