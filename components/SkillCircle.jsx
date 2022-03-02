import Image from "next/image";
import React from "react";

const SkillCircle = ({ img }) => {
  return (
    <div className="bg-white rounded-full py-8 px-9 drop-shadow-2xl shadow-md items-center inline-grid hover:-translate-y-6 hover:scale-110 duration-500 ease-out">
      <Image
        width="100%"
        height="100%"
        src={img}
        alt=""
        className="h-full w-full shadow-lg mx-auto my-auto"
      />
    </div>
  );
};

export default SkillCircle;
