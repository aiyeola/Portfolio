import { IconCircle } from "components";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-8  pt-[92px] pb-7 lg:px-[135px] bg-dark-bg">
      <div className=" md:grid grid-cols-4 text-center md:text-left">
        <div className="mb-16">
          <p className="text-white font-bold uppercase text-2xl">Bestman</p>
        </div>
        <div className="flex flex-col space-y-3 text-light-gray mb-16">
          <h5 className="h5">Menu</h5>
          <Link href="#">
            <span className="hover:text-white duration-300 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-white duration-300 cursor-pointer">
              Portfolio
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-white duration-300 cursor-pointer">
              Blog
            </span>
          </Link>
        </div>
        <div className="flex flex-col space-y-3 text-light-gray mb-16">
          <h5 className="h5">Services</h5>
          <Link href="#">
            <span className="hover:text-white duration-300 cursor-pointer">
              API Integration
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-white duration-300 cursor-pointer">
              UI Implementation
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-white duration-300 cursor-pointer">
              Landing Pages
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-white duration-300 cursor-pointer">
              UX Optimization
            </span>
          </Link>
        </div>
        <div className="flex space-x-2 justify-center md:justify-end mb-16">
          <IconCircle size="sm">
            <AiFillGithub fontSize="20px" color="white" />
          </IconCircle>
          <IconCircle size="sm">
            <FaLinkedinIn fontSize="20px" color="white" />
          </IconCircle>
          <IconCircle size="sm">
            <FaTwitter fontSize="20px" color="white" />
          </IconCircle>
        </div>
      </div>
      <div className="border-t-[1px] border-t-light-gray pt-10 flex justify-center">
        <p className="text-light-gray text-xs sm:text-sm md:text-base">
          Copyright © 2022 Laaqiq. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
