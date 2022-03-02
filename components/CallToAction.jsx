import { SubSectionHeading } from "components";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const CallToAction = () => {
  return (
    <div className=" py-20 px-8 sm:px-12 lg:px-[135px] bg-dark-bg">
      <div className="sm:grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 items-center gap-4 my-6">
        <div className="col-span-3 md:col-span-1">
          <SubSectionHeading
            title="Start Building Your Product Today"
            subtitle="Get Started"
            size="small"
            isWhite
          />
          <Button size="sm" className="scale-90 my-4 hidden md:block">
            Start Now
          </Button>
        </div>

        <div className="sm:col-span-2 md:col-span-1 my sm:order-1">
          <Image
            src="/images/call_to_action.png"
            width="420px"
            height="300px"
            className="h-full w-full"
          />
        </div>
        <div className=" sm:col-span-2 md:col-span-1">
          <p className="text-light-gray">
            Put themselves in the merchant's shoes. It is meant to partner on
            the long run.
          </p>
        </div>
      </div>
      <Button size="sm" className="scale-90 my-4 md:hidden block">
        Start Now
      </Button>
    </div>
  );
};

export default CallToAction;
