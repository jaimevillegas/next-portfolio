"use client";
import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
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
