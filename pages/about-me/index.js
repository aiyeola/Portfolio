import { AboutMeSummary, Layout, PageBanner } from "components";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <Layout>
      <PageBanner
        title="About Us"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore itaque id impedit illo inventore ducimus libero odit nam perspiciatis "
      />
      <div className="px-8 sm:px-12 py-[80px] md:px-[135px] bg-light-bg">
        <div className="w-full h-[456px] relative  drop-shadow-lg">
          <Image
            src="/images/Prophet.jpg"
            layout="fill"
            className="object-cover object-center"
          />
        </div>

        <AboutMeSummary />
      </div>
    </Layout>
  );
};

export default AboutMe;
