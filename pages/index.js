import React from "react";
import Head from "next/head";
import {
  HomeHero,
  Layout,
  ProjectSection,
  ServicesSection,
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
      </div>
    </Layout>
  );
}
