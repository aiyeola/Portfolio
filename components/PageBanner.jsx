import React from "react";

const PageBanner = ({ title, text }) => {
  return (
    <div className="min-h-[350px] bg-dark-bg flex items-center justify-center">
      <div className="max-w-xl">
        <h2 className="text-[56px] text-white md:text-7xl text-center font-bold">
          {title}
        </h2>
        <p className="text-light-gray text-center">{text}</p>
      </div>
    </div>
  );
};

export default PageBanner;
