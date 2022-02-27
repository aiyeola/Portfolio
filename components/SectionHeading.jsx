import React from "react";

const SectionHeading = ({ title, subtitle, isWhite }) => {
  return (
    <div className="text-center flex flex-col justify-center ">
      <h3 className="text-accent uppercase text-base leading-[32px] tracking-[3px] ">
        {subtitle}
      </h3>
      <h2
        className={` text-[40px] md:text-[56px] capitalize font-bold leading-[64px] max-w-sm mx-auto ${
          isWhite ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
