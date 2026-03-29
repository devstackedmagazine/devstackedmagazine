"use client";

import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Globe,
  Megaphone,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

type FeatureCard = {
  id: number;
  title: string;
  copy: string;
  icon: LucideIcon;
};

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 1,
    title: "Strategy and Discovery",
    copy: "We define goals, audience, and page structure before design decisions start multiplying.",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: "Interface Design",
    copy: "Layouts are designed to feel sharp, readable, and consistent across screens instead of generic or overworked.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Front-End Development",
    copy: "We build with modern tools and clean implementation so the shipped experience stays fast and dependable.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Content Direction",
    copy: "Messaging is shaped to help visitors understand the offer quickly without relying on vague filler copy.",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Performance and SEO",
    copy: "We clean up technical basics, structure pages properly, and make sure the site can be crawled and understood.",
    icon: ChartNoAxesCombined,
  },
  {
    id: 6,
    title: "Launch Support",
    copy: "After delivery, we help tighten loose ends, review outcomes, and keep the product moving in the right direction.",
    icon: Globe,
  },
];

export default function DreamToRealitySection() {
  return (
    <section className="mt-[5.5rem] max-[680px]:mt-[4.4rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants.staggerContainer}
      >
        <div className="flex items-start justify-between gap-[1.5rem] max-[980px]:flex-col">
          <motion.h2 variants={variants.fadeInUp} className="m-0 text-[clamp(2rem,3.8vw,3.4rem)] font-medium tracking-[0.01em]">
            Our Dream to Reality
          </motion.h2>
          <motion.p variants={variants.fadeInUp} className="max-w-[430px] mt-[0.6rem] text-[0.84rem] leading-[1.55] text-white/74 max-[980px]:max-w-none">
            From early direction to launch-day polish, we handle the work that
            turns a rough idea into something confident enough to publish.
          </motion.p>
        </div>

        <motion.div variants={variants.staggerContainer} className="mt-[2.1rem] grid grid-cols-3 gap-[1.2rem] max-[1220px]:grid-cols-2 max-[680px]:grid-cols-1">
          {FEATURE_CARDS.map((card) => (
            <motion.article
              variants={variants.fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/25 bg-[linear-gradient(155deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] rounded-[18px] p-[1rem_1rem_1.1rem] min-h-[210px] backdrop-blur-[10px] max-[680px]:min-h-[180px]" key={card.id}>
              <div className="w-[34px] h-[34px] rounded-[10px] border border-white/30 grid place-items-center text-white/82 text-[0.85rem]" aria-hidden>
                <card.icon size={15} strokeWidth={1.9} />
              </div>
              <h3 className="m-[1rem_0_0.7rem] text-[1.45rem] font-medium">{card.title}</h3>
              <p className="m-0 text-[0.84rem] leading-[1.5] text-white/74">{card.copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
