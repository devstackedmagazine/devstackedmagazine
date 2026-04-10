"use client";

import Image from "next/image";
import RedDots from "@/public/styles/red-dots.svg";
import Project from "@/public/images/home/quickit.png";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

const projects = [
  {
    name: "Quickit",
    description:
      "A focused product concept designed around speed, clarity, and AI-assisted workflows.",
    image: Project,
  },
  {
    name: "Landing Pages",
    description:
      "Conversion-minded pages built to explain an offer quickly and move visitors toward action.",
    image: Project,
  },
  {
    name: "Business Websites",
    description:
      "Clean, flexible sites for teams that need a sharper online presence without unnecessary complexity.",
    image: Project,
  },
  {
    name: "Product MVPs",
    description:
      "Lean interfaces for startups and internal tools that need to be useful from the first release.",
    image: Project,
  },
];

export default function OurProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
      >
        <motion.div
          variants={variants.fadeInUp}
          className="flex justify-center md:justify-start items-center gap-2"
        >
          <h2 className="text-white text-center sm:text-left text-3xl md:text-5xl font-light mb-1">
            What We Build
          </h2>
          <Image src={RedDots} alt="Red Dots" />
        </motion.div>
        <motion.p
          variants={variants.fadeInUp}
          className="text-white text-center text-sm sm:text-left sm:max-w-lg mt-3 mx-auto sm:mx-0"
        >
          A mix of shipped work and the kinds of builds clients bring to us most
          often: product concepts, marketing pages, and business websites that
          need to feel polished from day one.
        </motion.p>
        <motion.div
          variants={variants.staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-stretch gap-6 md:gap-8 mt-10"
        >
          {projects.map((project) => (
            <motion.article
              variants={variants.fadeInUp}
              className="w-full max-w-[400px] md:max-w-none relative overflow-hidden rounded-2xl cursor-pointer border-4 border-transparent transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white/80 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] group"
              key={project.name}
            >
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                draggable={false}
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 backdrop-blur-md transition-all duration-500
              [mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
              [-webkit-mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
              group-hover:[mask-image:linear-gradient(to_top,black_0%,black_30%,transparent_60%)]
              "
              />
              <h3 className="absolute left-4 md:left-6 md:bottom-10 lg:bottom-18 text-white text-2xl md:text-3xl font-semibold transition-transform duration-300 group-hover:-translate-y-1">
                {project.name}
              </h3>
              <p className="absolute bottom-4 left-4 md:left-6 md:bottom-4 text-white text-sm md:text-base opacity-80 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                {project.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
