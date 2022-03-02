import React from "react";
import Head from "next/head";
import {
  CallToAction,
  HomeHero,
  Layout,
  ProjectSection,
  ServicesSection,
  TestimonialSection,
  TopSkills,
} from "../components";

export default function Home() {
  return (
    <Layout className="">
      <Head>
        <title>Prophet Bestman | Home</title>
      </Head>
      <div>
        <HomeHero />
        <ServicesSection />
        <ProjectSection />
        <TopSkills />
        <CallToAction />
        <TestimonialSection />
      </div>
    </Layout>
  );
}
