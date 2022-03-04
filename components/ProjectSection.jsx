import React from "react";
import Button from "./Button";
import ImageCard from "./ImageCard";
import SubSectionHeading from "./SubSectionHeading";

const ProjectSection = () => {
  return (
    <div className="bg-dark-bg min-h-screen py-[92px] ">
      <div className=" px-8 sm:px-12 lg:px-[135px] mb-16 sm:flex justify-between items-center">
        <SubSectionHeading
          title="Latest Projects"
          subtitle="Portfolio"
          isWhite
        />
        <Button variant="outline" link="/portfolio">
          Explore More
        </Button>
      </div>

      <div className=" md:grid lg:grid-cols-2 xl:grid-cols-3 px-2 md:px-4">
        <div className="col-span-1 border border-gray-500 p-4 h-[500px] md:h-[400px] xl:h-[567px]">
          <ImageCard img="/images/product.jpg" />
        </div>
        <div className="col-span-1 border border-gray-500 p-4 h-[500px] md:h-[400px] xl:h-[567px]">
          <ImageCard img="/images/product.jpg" />
        </div>
        <div className="col-span-2 xl:col-span-1 border border-gray-500 p-4 h-[500px] md:h-[400px] xl:h-[567px]">
          <ImageCard img="/images/product.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
