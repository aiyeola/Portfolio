import React from "react";
import {
  CallToAction,
  InfoCard,
  Layout,
  Padding,
  PageBanner,
} from "components";
import { projects } from "data/projects";

const Projects = () => {
  return (
    <Layout>
      <PageBanner
        title="Projects"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore itaque id impedit illo inventore ducimus libero odit nam perspiciatis "
      />
      <div className=" bg-light-bg py-[80px]">
        <Padding>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.length > 0 &&
              projects.map((project) => (
                <InfoCard
                  name={project.name}
                  img={project.img}
                  link={project.link}
                  excerpt={project.excerpt}
                />
              ))}
          </div>
        </Padding>

        <CallToAction />
      </div>
    </Layout>
  );
};

export default Projects;
