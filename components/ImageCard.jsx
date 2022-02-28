import React from "react";

const ImageCard = ({img = '/images/product.jpg'}) => {
  return (
    <div className="h-full hover:scale-105 rounded-md relative duration-300">
      <div className="absolute bottom-5 md:bottom-[48px] left-5 md:left-[48px] z-10">
        <button className="bg-white px-3 md:px-4 py-1 md:py-[5px] rounded-full hover:scale-95 duration-200">
          <span className="leading-[0px] font-medium text-sm md:text-base text-dark">See Details</span>
        </button>
        <h4 className="uppercase font-black  md:font-black text-white text-2xl md:text-[30px] leading-[48px]">
          Crypto App
        </h4>
      </div>
      <div className="absolute top-0 left-0 bg-dark w-full h-full opacity-25 duration-300 hover:opacity-40 rounded-md"></div>
      <img
        src={img}
        className="w-full h-full object-center hover:scale-105 object-cover rounded-md "
        alt=""
      />
    </div>
  );
};

export default ImageCard;
