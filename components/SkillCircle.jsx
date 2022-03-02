import Image from "next/image";
import React from "react";

const SkillCircle = ({ img }) => {
  return (
    <div className="bg-white rounded-full py-9 px-10 drop-shadow-2xl shadow-md items-center inline-grid hover:-translate-y-6 hover:scale-110 duration-500 ease-out">
      <Image
        width="130%"
        height="130%"
        // layout="fill"
        src={img}
        alt=""
        className="shadow-lg mx-auto m-12 "
      />
    </div>
  );
};

export default SkillCircle;
