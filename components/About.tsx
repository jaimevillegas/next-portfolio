"use client";

import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeader>about me</SectionHeader>
      {/* //TODO: Add styling tags */}
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum
        natus laborum itaque vero delectus ad, doloribus exercitationem eaque?
        Tempore cum assumenda, voluptatum autem unde quidem voluptate. Quas,
        illum necessitatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum
        natus laborum itaque vero delectus ad, doloribus exercitationem eaque?
        Tempore cum assumenda, voluptatum autem unde quidem voluptate. Quas,
        illum necessitatibus.
      </p>
    </motion.section>
  );
}

export default About;
