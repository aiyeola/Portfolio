import Image from "next/image";
import React from "react";
import { SubSectionHeading } from ".";
import Button from "./Button";

const HomeHero = () => {
  return (
    <div className="bg-dark-bg min-h-[700px] px-8 sm:px-12 lg:px-[135px] py-20 flex-col-reverse flex sm:grid grid-cols-2 justify-center items-center">
      <div className="max-w-sm col-span-1">
        <SubSectionHeading
          title="I'mma Software Developer"
          subtitle="Prophet Bestman"
          isWhite
        />
        <p className="text-light-gray py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          obcaecati cumque debitis?
        </p>
        <Button link="/about-me">Meet Me</Button>
      </div>
      <div className="col-span-1">
        <Image
          height="900px"
          width="900px"
          src="/images/hero2.png"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default HomeHero;
