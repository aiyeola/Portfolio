import { SubSectionHeading } from "components";
import React from "react";
import Button from "./Button";
import LatestBlogPost from "./LatestBlogPost";
import SidePaneRecentPost from "./SidePaneRecentPost";

const RecentBlogsSection = () => {
  return (
    <div className="px-8 sm:px-12 min-h-screen py-[92px] md:px-[135px] bg-dark-bg">
      <div className="lg:grid grid-cols-5 items-center">
        <div className="col-span-2">
          <SubSectionHeading
            title="Latest Blog Articles"
            subtitle="My Blogs"
            isWhite
            size="sm"
          />
        </div>
        <div className="col-span-3 ml-auto">
          <Button variant="outline">All Blogs</Button>
        </div>
      </div>

      <div className="lg:grid grid-cols-8 gap-16 xl:gap-24">
        <div className="col-span-5">
          <LatestBlogPost />
        </div>
        <div className="col-span-3 lg:block grid sm:grid-cols-2 gap-6">
          <SidePaneRecentPost />
          <SidePaneRecentPost />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogsSection;
