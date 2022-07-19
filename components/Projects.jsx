import Image from "next/image";
import Link from "next/link";
import React from "react";
import proshopImg from "../public/assets/projects/proshop.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl tracking-widest uppercase  text-[#004aad]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ecommerce store"
            backgroundImg={proshopImg}
            projectUrl="/proshop"
            tech="MERN stack"
          />
          <ProjectItem
            title="We Can Ride"
            backgroundImg={proshopImg}
            projectUrl="/wecanride"
            tech="SERN stack"
          />
          <ProjectItem
            title="We Can Ride"
            backgroundImg={proshopImg}
            projectUrl="/proshop"
            tech="MERN stack"
          />
          <ProjectItem
            title="We Can Ride"
            backgroundImg={proshopImg}
            projectUrl="/proshop"
            tech="MERN stack"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
