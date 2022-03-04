import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className=" mx-auto">
      <div className="grid-cols-3 py-12 md:px-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="w-full rounded relative h-72 sm:h-56 sm-h-auto">
          <Image
            layout="fill"
            className="object-cover object-top"
            src="/images/prophet-grid.jpg"
            alt="image"
          />
        </div>
        <div className="w-full col-span-2 row-span-2 relative h-72 sm:h-auto rounded">
          <Image
            layout="fill"
            className="object-cover object-top"
            src="/images/prophet-grid.jpg"
            alt="image"
          />
        </div>
        <div className="w-full rounded relative h-72 sm:h-56 sm-h-auto">
          <Image
            layout="fill"
            className="object-cover object-top"
            src="/images/prophet-grid.jpg"
            alt="image"
          />
        </div>
        <div className="w-full rounded relative h-72 sm:h-56 sm-h-auto">
          <Image
            layout="fill"
            className="object-cover object-top"
            src="/images/prophet-grid.jpg"
            alt="image"
          />
        </div>
        <div className="w-full rounded relative h-72 sm:h-56 sm-h-auto">
          <Image
            layout="fill"
            className="object-cover object-top"
            src="/images/prophet-grid.jpg"
            alt="image"
          />
        </div>
        <div className="w-full rounded relative h-72 sm:h-56 sm-h-auto">
          <Image
            layout="fill"
            className="object-cover object-top"
            src="/images/prophet-grid.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
