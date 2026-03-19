"use client";

import Image from "next/image";
import Link from "next/link";
import RedDots from "@/public/styles/red-dots.svg";
import Project from "@/public/images/home/quickit.png";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

const projects = [
  {
    name: "Quickit",
    description: "An AI app",
    image: Project,
    link: "/projects/quickit",
  },
  {
    name: "Project 2",
    description: "Description for project 2",
    image: Project,
    link: "/projects/project-2",
  },
  {
    name: "Project 3",
    description: "Description for project 3",
    image: Project,
    link: "/projects/project-3",
  },
  {
    name: "Project 4",
    description: "Description for project 4",
    image: Project,
    link: "/projects/project-4",
  },
];

export default function OurProjectsSection() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
      >
        <motion.div variants={variants.fadeInUp} className="flex justify-center md:justify-start items-center gap-2">
          <h1 className="text-white text-center sm:text-left text-3xl md:text-5xl font-light mb-1">
            Our Projects
          </h1>
          <Image src={RedDots} alt="Red Dots" />
        </motion.div>
        <motion.p variants={variants.fadeInUp} className="text-white text-center text-sm sm:text-left sm:max-w-lg mt-3 mx-auto sm:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam
          tenetur ducimus quibusdam voluptas nam commodi rem, exercitationem et
          odit.
        </motion.p>
        <motion.div 
          variants={variants.staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch gap-6 md:gap-8 mt-10"
        >
          {projects.map((project) => (
            <motion.div
              variants={variants.fadeInUp}
              className="w-full max-w-[400px] md:max-w-none relative overflow-hidden rounded-2xl cursor-pointer border-4 border-transparent transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white/80 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] group"
              key={project.name}
            >
              <Image
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />
              <div
                className="pointer-events-none absolute inset-0 backdrop-blur-md transition-all duration-500
              [mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
              [-webkit-mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
              group-hover:[mask-image:linear-gradient(to_top,black_0%,black_30%,transparent_60%)]
              "
              />
              <h2 className="absolute bottom-8 left-4 md:left-6 md:bottom-10 text-white text-2xl md:text-3xl font-semibold transition-transform duration-300 group-hover:-translate-y-1">
                {project.name}
              </h2>
              <p className="absolute bottom-3 left-4 md:left-6 md:bottom-4 text-white text-sm md:text-base opacity-80 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
