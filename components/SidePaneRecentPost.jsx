import Image from "next/image";
import React from "react";

const SidePaneRecentPost = () => {
  return (
    <div>
      <div className="w-full relative h-[200px] sm:h-[160px] mt-16">
        <Image
          src="/images/product.jpg"
          layout="fill"
          // width="100%"
          // height="100%"
          className="object-cover h-full w-full object-center rounded-sm"
        />
      </div>
      {/* Category */}
      <h5 className="text-light-gray my-3">Stories</h5>

      {/* Title */}
      <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-xl leading-[48px]">
        Agency is a business you hire to outsource
      </h3>
      <p className="mt-4 lg:mt-0 text-light-gray">5 Nov, 2021</p>
    </div>
  );
};

export default SidePaneRecentPost;
