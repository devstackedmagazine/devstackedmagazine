"use client";

import Image from "next/image";
import heroImage from "@/public/images/home/heroImage.svg";
import { ArrowRight } from "lucide-react";
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

          <motion.p variants={variants.fadeInUp} className="mt-[1.2rem] max-w-[460px] text-[0.87rem] leading-[1.58] text-white/75 max-[680px]:text-[0.8rem]">
            Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            risotto garlic dolor sauce marinara Chicago marinara. Tomato dolor
            pesto pesto bianca.
          </motion.p>

          <motion.form variants={variants.fadeInUp} className="mt-[1.4rem] w-[min(360px,100%)] flex items-center border border-white/24 rounded-[999px] overflow-hidden bg-black/22">
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="flex-1 border-none bg-transparent text-white p-[0.7rem_1rem] text-[0.84rem] outline-none placeholder:text-white/54"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="w-[36px] h-[22px] rounded-[999px] border-none bg-[#ce1324] text-white mr-[0.35rem] cursor-pointer inline-flex items-center justify-center"
            >
              <ArrowRight size={14} strokeWidth={2.4} />
            </motion.button>
          </motion.form>
        </div>

        <motion.div variants={variants.scaleUp} className="absolute right-[58px] bottom-0 w-[220px] h-[330px] max-[980px]:right-[50%] max-[980px]:translate-x-[50%] max-[680px]:w-[180px] max-[680px]:h-[280px]" aria-hidden>
          <Image src={heroImage} alt="" className="w-full h-full object-contain object-bottom" />
        </motion.div>
      </motion.div>
    </section>
  );
}
