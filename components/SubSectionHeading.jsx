import React from "react";

const SubSectionHeading = ({
  title = "Title",
  subtitle = "Sub title",
  isWhite = false,
  size = "normal",
}) => {
  return (
    <div className="">
      <h3 className="text-accent uppercase text-base leading-[32px] tracking-[3px] ">
        {subtitle}
      </h3>
      <h2
        className={` text-[36px] md:text-[48px] capitalize font-bold leading-[64px] ${
          isWhite ? "text-white" : "text-dark"
        } ${size === "small" ? "text-2xl md:text-3xl" : null}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SubSectionHeading;
