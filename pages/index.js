import { HomeHero } from "../components";
import CustomHead from "../Layout/CustomHead";
import Layout from "../Layout/Layout";

export default function Home() {
  return (
    <Layout className="">
      <CustomHead>
        <title>Create Next App</title>
      </CustomHead>
      <div className="items-center justify-center h-screen">
        {/* <ImageCard />  */}
        <HomeHero />
      </div>
    </Layout>
  );
}
