import { SectionHeading } from "components";
import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const settings = {
  dots: true,
  //   centerMode: true,
  speed: 500,
  arrows: false,
  autoPlay: true,
  autoPlaySpead: 3000,
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialSection = () => {
  return (
    <div className="bg-light-bg px-8 sm:px-12 min-h-screen py-[92px] lg">
      <Head></Head>
      <SectionHeading title="What My Clients Say" subtitle="Testimonial" />

      <Slider {...settings} className="py-10">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Slider>
    </div>
  );
};

export default TestimonialSection;
