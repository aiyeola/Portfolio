import {
  AboutMeSummary,
  CallToAction,
  Gallery,
  Layout,
  Padding,
  PageBanner,
} from "components";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <Layout>
      <PageBanner
        title="About Me"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore itaque id impedit illo inventore ducimus libero odit nam perspiciatis "
      />
      <div className=" bg-light-bg py-[80px]">
        <Padding>
          <div className="w-full h-[456px] relative  drop-shadow-lg">
            <Image
              src="/images/Prophet.jpg"
              layout="fill"
              className="object-cover object-center"
            />
          </div>
          <AboutMeSummary />
          <Gallery />
        </Padding>

        <CallToAction />
      </div>
    </Layout>
  );
};

export default AboutMe;
