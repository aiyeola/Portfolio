import React from "react";
import SubSectionHeading from "./SubSectionHeading";
import { HiLocationMarker } from "react-icons/hi";
import { IconCircle } from "components";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Form from "./Form";

const ContactSection = () => {
  return (
    <div className="px-8  py-[92px] lg:px-[135px] bg-light-bg flex flex-col-reverse md:grid grid-cols-12 gap-8">
      <div className="col-span-7 xl:col-span-6 flex justify-center">
        <Form />
      </div>
      <div className="col-span-5 xl:col-span-6">
        <SubSectionHeading title="Contact Me" subtitle="Contact" />
        <p className="my-7 text-dark-gray">
          A digital agency is a business you hire to outsource your digital
          marketing efforts, instead of handling in-house.
        </p>
        <div className=" flex space-x-4  items-center mb-6">
          <IconCircle size="sm">
            <HiLocationMarker fontSize="24px" color="white" />
          </IconCircle>
          <span>2247 Lunetta Street, TX 76301</span>
        </div>
        <div className=" flex space-x-4 items-center mb-6">
          <IconCircle size="sm">
            <FaPhoneAlt fontSize="20px" color="white" />
          </IconCircle>
          <span>+1 (234) 567-89-00</span>
        </div>
        <div className=" flex space-x-4 items-center mb-6">
          <IconCircle size="sm">
            <AiFillMail fontSize="20px" color="white" />
          </IconCircle>
          <span>bestiproph@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
