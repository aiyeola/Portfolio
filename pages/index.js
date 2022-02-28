import React from "react";
import Head from "next/head";
import { HomeHero, Layout, ProjectSection, ServicesSection } from "../components";

export default function Home() {
  return (
    <Layout className="">
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <HomeHero />
        <ServicesSection />
        <ProjectSection />
      </div>
    </Layout>
  );
}
