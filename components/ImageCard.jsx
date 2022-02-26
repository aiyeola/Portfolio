import React from "react";

const ImageCard = () => {
  return (
    <div className="max-w-md h-[416px] hover:scale-105 rounded-md relative duration-300">
      <div className="absolute bottom-[48px] left-[48px] z-10">
        <button className="bg-white text-dark px-4 py-[5px] rounded-full hover:scale-95 duration-200">
          <span className="leading-[0px]">See Details</span>
        </button>
        <h4 className="uppercase font-black text-white text-[30px] leading-[48px]">
          Crypto App
        </h4>
      </div>
      <div className="absolute top-0 left-0 bg-black w-full h-full opacity-25 duration-300 hover:opacity-40 rounded-md"></div>
      <img
        src="/images/product.jpg"
        className="w-full h-full object-center hover:scale-105 object-cover rounded-md "
        alt=""
      />
    </div>
  );
};

export default ImageCard;
