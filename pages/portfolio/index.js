import {
  CallToAction,
  InfoCard,
  Layout,
  Padding,
  PageBanner,
} from "components";
import React from "react";

const projects = [
  {
    id: 1,
    name: "Latest Project",
    excerpt:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error facilis ea minus voluptates nam cumque. Exercitationem, excepturi tenetur? Fugiat.",
    link: "#",
    img: "/images/product.jpg",
  },
  {
    id: 2,
    name: "Latest Project",
    excerpt:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error facilis ea minus voluptates nam cumque. Exercitationem, excepturi tenetur? Fugiat.",
    link: "#",
    img: "/images/product.jpg",
  },
  {
    id: 3,
    name: "Latest Project",
    excerpt:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error facilis ea minus voluptates nam cumque. Exercitationem, excepturi tenetur? Fugiat.",
    link: "#",
    img: "/images/product.jpg",
  },
  {
    id: 4,
    name: "Latest Project",
    excerpt:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error facilis ea minus voluptates nam cumque. Exercitationem, excepturi tenetur? Fugiat.",
    link: "#",
    img: "/images/product.jpg",
  },
  {
    id: 5,
    name: "Latest Project",
    excerpt:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error facilis ea minus voluptates nam cumque. Exercitationem, excepturi tenetur? Fugiat.",
    link: "#",
    img: "/images/product.jpg",
  },
  {
    id: 6,
    name: "Latest Project",
    excerpt:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error facilis ea minus voluptates nam cumque. Exercitationem, excepturi tenetur? Fugiat.",
    link: "#",
    img: "/images/product.jpg",
  },
];

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
