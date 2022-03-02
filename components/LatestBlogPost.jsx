import Image from "next/image";
import React from "react";

const LatestBlogPost = () => {
  return (
    <div>
      <div className="w-full relative h-[360px] lg:h-[515px] mt-16">
        <Image
          src="/images/product.jpg"
          layout="fill"
          // width="800px"
          // height="468px"
          className="object-cover object-top rounded-md"
        />
      </div>
      {/* Category */}
      <h5 className="text-light-gray my-7">Stories</h5>

      {/* Title */}
      <h3 className="text-white font-bold text-3xl md:text-[40px] leading-[48px] ">
        Agency is a business you hire to outsource
      </h3>
      <p className="mt-4 text-light-gray">5 Nov, 2021</p>
    </div>
  );
};

export default LatestBlogPost;
