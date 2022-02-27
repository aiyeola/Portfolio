import React from "react";

const SubSectionHeading = ({ title, subtitle, isWhite }) => {
  return (
    <div className="">
      <h3 className="text-accent uppercase text-base leading-[32px] tracking-[3px] ">
        {subtitle}
      </h3>
      <h2
        className={` text-[36px] md:text-[48px] capitalize font-bold leading-[64px] ${
          isWhite ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SubSectionHeading;
