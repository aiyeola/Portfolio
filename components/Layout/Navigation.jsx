import Link from "next/link";
import React from "react";
import { Button } from "..";

const Navigation = () => {
  return (
    <div className="py-4 flex w-full lg:px-[135px] justify-between items-center bg-dark-bg">
      <div className="text-white text-3xl font-bold ">Bestman</div>
      <div>
        <ul className="flex space-x-24 flex-1 text-gray-300">
          <li>
            <Link href="/about-me">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <Button variant="outline">Contact</Button>
      </div>
    </div>
  );
};

export default Navigation;
