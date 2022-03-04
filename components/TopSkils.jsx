import { SectionHeading, SkillCircle } from "components";
import React from "react";
import { skills } from "data/skills";

const TopSkils = () => {
  return (
    <div className="bg-light-bg  px-8 sm:px-12 lg:px-[135px] py-[92px]">
      <SectionHeading title="My Top Skills" subtitle="Technologies" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 gap-y-24 my-12">
        {skills.map((skill) => (
          <div
            className="col-span-1 mx-auto  hover:text-dark text-dark-gray"
            key={skill.name}
          >
            <SkillCircle img={skill.url} />
            <p className="mt-4 text-center font-semibold text-2xl">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSkils;
