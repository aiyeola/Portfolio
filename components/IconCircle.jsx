import Link from "next/link";
import React from "react";

const IconCircle = ({ variant, icon, size, link }) => {
  const variantStyle =
    variant === "dark"
      ? "bg-primary"
      : variant === "light"
      ? "bg-white shadow-md hover:shadow-xl"
      : "bg-accent";

  const sizeStyle =
    size === "sm"
      ? "h-[48px] w-[48px]"
      : "w-[54px] h-[54px] md:w-[64] md:h-[64] lg:h-[80px] lg:w-[80px] ";

  return (
    <div className={`inline-block  ${link ? "cursor-pointer" : null}`}>
      {!!link ? (
        <Link href={link}>
          <div
            className={`hover:scale-90 duration-200 flex justify-center items-center rounded-full ${variantStyle} ${sizeStyle}`}
          >
            <img src={icon} alt="" />
          </div>
        </Link>
      ) : (
        <div
          className={` flex justify-center items-center rounded-full ${variantStyle} ${sizeStyle}`}
        >
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default IconCircle;
