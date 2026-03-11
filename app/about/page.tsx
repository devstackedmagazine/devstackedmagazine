import type { Metadata } from "next";
import AgencyHeroSection from "@/components/about/AgencyHeroSection";
import BuildSomethingSection from "@/components/about/BuildSomethingSection";
import DreamToRealitySection from "@/components/about/DreamToRealitySection";
import JourneySection from "@/components/about/JourneySection";
import StatsStrip from "@/components/about/StatsStrip";
import styles from "@/components/about/about.module.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team and process behind DevStacked Magazine, a studio focused on thoughtful web design, development, and practical digital execution.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "Get to know the people, process, and approach behind DevStacked Magazine.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "DevStacked Magazine about page preview",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.bgGlowOne} aria-hidden />
      <div className={styles.bgGlowTwo} aria-hidden />
      <div className={styles.bgGlowThree} aria-hidden />

      <AgencyHeroSection />
      <DreamToRealitySection />
      <JourneySection />
      <StatsStrip />
      <BuildSomethingSection />
    </div>
  );
}
