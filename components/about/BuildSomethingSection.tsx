"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/home/heroImage.png";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

export default function BuildSomethingSection() {
  return (
    <section className="mt-[5.4rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
        className="border border-white/22 rounded-[18px] bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] backdrop-blur-[12px] min-h-[360px] relative overflow-hidden p-[2rem] flex items-center max-[980px]:pb-[19rem] max-[680px]:min-h-[430px] max-[680px]:p-[1.2rem_1rem_18.5rem]"
      >
        <div className="w-[min(530px,100%)]">
          <motion.h2 variants={variants.fadeInUp} className="m-0 text-[clamp(2.8rem,6.2vw,5.5rem)] leading-[0.98] font-semibold max-[680px]:leading-[1.03]">
            Let&apos;s Build
            <br />
            Something
            <br />
            <span className="text-red-active">Amazing</span>
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            className="mt-[1.2rem] max-w-[460px] text-[0.87rem] leading-[1.58] text-white/75 max-[680px]:text-[0.8rem]"
          >
            If you have a launch coming up, a site that needs sharper structure,
            or a product page that is not pulling its weight, we can help you
            clean it up and ship it properly.
          </motion.p>

          <motion.div
            variants={variants.fadeInUp}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-red-active px-6 text-sm font-medium text-white transition-colors hover:bg-red-active-hover"
            >
              Start a project
            </Link>
            <a
              href="mailto:devstackedmagazine@gmail.com"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              devstackedmagazine@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={variants.scaleUp}
          className="absolute right-[58px] bottom-0 w-[220px] h-[330px] max-[980px]:right-[50%] max-[980px]:translate-x-[50%] max-[680px]:w-[180px] max-[680px]:h-[280px]"
          aria-hidden
        >
          <Image src={heroImage} alt="" className="w-full h-full object-contain object-bottom" />
        </motion.div>
      </motion.div>
    </section>
  );
}
