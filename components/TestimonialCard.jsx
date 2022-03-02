import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="bg-white py-10 px-6 md:p-10 mx-1 shadow-sm drop-shadow-sm hover:drop-shadow-lg hover:shadow-lg hover:-translate-y-2 my-8 duration-300 rounded-lg">
      <p className="text-dark-gray mb-16 mt-8">
        <span>
          <FaQuoteLeft className="text-3xl my-3 text-dark-bg" />
        </span>
        A digital agency is a business you hire to outsource your digital
        marketing efforts, instead of handling in-house. They can provide your
        business with a variety of digital solutions.
      </p>
      <div className="flex space-x-3 items-center">
        <div className="h-14 w-14 rounded-full bg-dark-bg">
          <Image
            src="/images/testimonial-1.jpg"
            width="100%"
            height="100%"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-xl font-bold leading-[32px]">Name Name</p>
          <p className="text-dark-gray text-sm">Company Name</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
