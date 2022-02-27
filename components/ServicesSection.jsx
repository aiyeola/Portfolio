import Link from "next/link";
import React from "react";
import { IconCircle, SectionHeading, TransparentCard } from ".";

const ServicesSection = () => {
  return (
    <div className="py-[92px] px-8 sm:px-12 lg:px-[135px] bg-light-bg min-h-screen">
      <SectionHeading title="How I can be of help" subtitle="Services" />
      <div className="grid grid-cols-2 pt-16 gap-6">
        <TransparentCard className="col-span-2 md:col-span-1">
          <div className="flex items-center col-span-2">
            <IconCircle icon="images/icons/service.png" />{" "}
            <h4 className="h4 ml-6 text-dark">API Integration</h4>
          </div>
          <p className="my-7 text-dark-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio
            sint vel ab ullam, perferendis nobis?
          </p>
          <IconCircle
            size="sm"
            variant="light"
            icon="images/icons/plus.png"
            link="#"
          />
        </TransparentCard>
        <TransparentCard className="col-span-2 md:col-span-1">
          <div className="flex items-center col-span-2">
            <IconCircle icon="images/icons/service.png" />{" "}
            <h4 className="h4 ml-6 text-dark">UI/UX Implementaion</h4>
          </div>
          <p className="my-7 text-dark-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio
            sint vel ab ullam, perferendis nobis?
          </p>
          <IconCircle
            size="sm"
            variant="light"
            icon="images/icons/plus.png"
            link="#"
          />
        </TransparentCard>
        <TransparentCard className="col-span-2 md:col-span-1">
          <div className="flex items-center col-span-2">
            <IconCircle icon="images/icons/service.png" />{" "}
            <h4 className="h4 ml-6 text-dark">Landing Pages</h4>
          </div>
          <p className="my-7 text-dark-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio
            sint vel ab ullam, perferendis nobis?
          </p>
          <IconCircle
            size="sm"
            variant="light"
            icon="images/icons/plus.png"
            link="#"
          />
        </TransparentCard>
        <TransparentCard className="col-span-2 md:col-span-1">
          <div className="flex items-center col-span-2">
            <IconCircle icon="images/icons/service.png" />{" "}
            <h4 className="h4 ml-6 text-dark">UI/UX Implementaion</h4>
          </div>
          <p className="my-7 text-dark-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio
            sint vel ab ullam, perferendis nobis?
          </p>
          <IconCircle
            size="sm"
            variant="light"
            icon="images/icons/plus.png"
            link="#"
          />
        </TransparentCard>
      </div>

      <p className="text-center text-dark mt-14">
        <span className="text-dark-gray">Want some other service?</span>{" "}
        <Link href="#"> Let's talk.</Link>
      </p>
    </div>
  );
};

export default ServicesSection;
