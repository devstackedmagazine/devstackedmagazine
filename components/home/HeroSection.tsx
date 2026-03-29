"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/home/heroImage.svg";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-7rem)] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background to-red-active/10" />
      <div className="container">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={variants.staggerContainer}
        >
          <motion.p variants={variants.fadeInUp} className="mb-4 text-sm uppercase tracking-[0.3em] text-white/55">
            Web Design and Development
          </motion.p>
          <motion.h1 variants={variants.fadeInUp} className="mb-6 text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-6xl sm:w-3/4">
            Fast websites and digital experiences built to look sharp and work hard.
          </motion.h1>
          <motion.p variants={variants.fadeInUp} className="mb-8 max-w-2xl text-lg text-white/80">
            DevStacked Magazine helps brands, founders, and growing teams launch
            modern web experiences with clear messaging, responsive design, and
            clean front-end execution.
          </motion.p>
          <motion.div variants={variants.fadeInUp} className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-4xl bg-red-active px-6 text-base font-medium text-white transition-all duration-200 hover:bg-red-active-hover"
            >
              Start a project
            </Link>
            <Link
              href="/#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-4xl border-2 border-red-active bg-transparent px-6 text-base font-medium text-red-active transition-all duration-200 hover:bg-red-active hover:text-white"
            >
              See our work
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.scaleUp}
        className="hidden sm:block"
      >
        <Image
          src={heroImage}
          alt="Illustration representing DevStacked Magazine web design and development services"
          className="h-[350px] lg:h-[550px]"
          priority
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.fadeIn}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          className="h-6 w-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
