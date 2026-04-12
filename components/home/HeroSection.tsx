"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import heroImage from "@/public/images/home/heroImage.svg";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-7rem)] -mt-8 relative flex items-center justify-center gap-10 overflow-hidden">
      <div className="absolute inset-0 from-background via-background to-red-active/10 -z-10" />
      <div className="container">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={variants.staggerContainer}
        >
          <motion.h1
            variants={variants.fadeInUp}
            className="text-4xl md:text-5xl lg:text-7xl font-semi text-white mb-6 leading-tight sm:w-3/4 lg:w-full"
          >
            <span className="block">Websites That Work</span>
            <span className="mt-2 block">
              <span className="relative inline-flex items-center rounded-full border border-red-active/45 bg-red-active/12 px-4 py-1.5 text-red-active shadow-[0_0_32px_rgba(199,14,26,0.18)]">
                as Hard
              </span>{" "}
              as You Do
            </span>
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            className="text-md text-white/80 mb-8 max-w-2xl"
          >
            We build fast, modern, and SEO-optimized websites that help your
            business get found &mdash; by search engines and AI alike.
          </motion.p>
          <motion.div
            variants={variants.fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="md">
              Start a project
            </Button>
            <Button
              variant="outline"
              size="md"
              rightIcon={
                <svg
                  className="w-5 h-5"
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
              }
            >
              See our work
            </Button>
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
          alt="Hero Image"
          className="h-[400px] lg:h-[700px] select-none w-full "
          priority
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="
           absolute left-0 top-20 text-[25rem] leading-none tracking-[0.08em] uppercase select-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]
         "
      >
        DEVSTACKED
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          className="w-6 h-6 text-white/40"
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
