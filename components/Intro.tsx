"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb:0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            tansition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Jaime"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            🚀
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5] sm:text-3xl"
      >
        Hi, I&apos;m Jaime, a full-stack developer based in the Philippines. I
        specialize in building web applications with React, Next.js, and
        Tailwind CSS. I also have experience working with Node.js, Express, and
        MongoDB. I&apos;m passionate about learning new technologies and
        building products that solve real-world problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          className="group bg-gray-900 cursor-pointer text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="bg-white cursor-pointer px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-x-1 transition opacity-70 " />
        </a>
        <a className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition group border border-black/10">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition group border border-black/10">
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
