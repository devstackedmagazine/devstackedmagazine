"use client";

import Image from "next/image";
import redDots from "@/public/styles/red-dots.svg";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function AgencyHeroSection() {
  return (
    <section className="relative min-h-[380px] mt-2 grid place-items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
        className="w-full grid place-items-center"
      >
        <motion.div variants={variants.scaleUp} className="absolute w-[50px] h-auto right-[72px] top-[32px] max-[980px]:right-[42px] max-[980px]:top-[22px] max-[680px]:w-[38px] max-[680px]:right-[24px] max-[680px]:top-[14px]">
          <Image src={redDots} alt="" aria-hidden className="w-full h-full" />
        </motion.div>
        <motion.span 
          variants={variants.fadeIn}
          className="absolute inset-0 flex items-center justify-center text-[clamp(6rem,17vw,14rem)] leading-none tracking-[0.08em] text-transparent uppercase select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]"
        >
          About
        </motion.span>
        <div className="relative text-center z-10">
          <motion.h1 variants={variants.fadeInUp} className="m-0 text-[clamp(2.1rem,5vw,4rem)] font-medium leading-[1.06]">
            The People Behind
            <br />
            The <span className="text-[#db1323] border-b border-[rgba(219,19,35,0.7)]">Pixels</span>
          </motion.h1>
        </div>
        <motion.div variants={variants.scaleUp} className="absolute w-[52px] h-auto left-[120px] bottom-[54px] max-[980px]:left-[60px] max-[980px]:bottom-[34px] max-[680px]:w-[40px] max-[680px]:left-[24px] max-[680px]:bottom-[20px]">
          <Image
            src={redDots}
            alt=""
            aria-hidden
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
