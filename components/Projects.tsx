"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
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
