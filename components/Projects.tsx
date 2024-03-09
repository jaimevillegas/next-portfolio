import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Project from "./Project";

function Projects() {
  return (
    <section>
      <SectionHeader>My projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
