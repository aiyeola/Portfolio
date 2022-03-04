import { Button } from "components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoCard = ({ name, excerpt, link, img }) => {
  return (
    <div className="bg-white shadow-sm drop-shadow-sm hover:drop-shadow-lg hover:shadow-lg hover:-translate-y-2 my-8 duration-300 rounded-lg max-w-md mx-auto">
      <div className="h-48 relative">
        <Image src={img} layout="fill" className="object-cover rounded-t-lg" />
        <div className="absolute h-full top-0 left-0 bg-black opacity-10 w-full rounded-t-lg"></div>
      </div>
      <div className="py-12 px-4">
        <h4 className="h4 text-dark text-center">{name}</h4>
        <p className="text-dark-gray my-4 text-center">{excerpt}</p>
        <div className="text-center">
          <Link href={link}>
            <span className="h5 cursor-pointer hover:opacity-70 text-center">
              See Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
