import React from "react";
import { SubSectionHeading } from ".";

const HomeHero = () => {
  return (
    <div className="bg-dark-bg h-[700px] px-8 sm:px-12 lg:px-[135px] flex-col-reverse flex sm:grid grid-cols-2 justify-center items-center">
      <div className="max-w-sm col-span-1">
        <SubSectionHeading
          title="I'mma Software Developer"
          subtitle="Prophet Bestman"
          isWhite
        />
      </div>
      <div className="col-span-1">
        <img src="images/hero2.png" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default HomeHero;
