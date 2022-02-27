import Head from "next/head";
import { HomeHero, Layout, ServicesSection } from "../components";
import Navigation from "../components/Layout/Navigation";

export default function Home() {
  return (
    <Layout className="">
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <HomeHero />
        <ServicesSection />
      </div>
    </Layout>
  );
}
