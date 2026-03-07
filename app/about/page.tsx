import AgencyHeroSection from "@/components/about/AgencyHeroSection";
import BuildSomethingSection from "@/components/about/BuildSomethingSection";
import DreamToRealitySection from "@/components/about/DreamToRealitySection";
import JourneySection from "@/components/about/JourneySection";
import StatsStrip from "@/components/about/StatsStrip";
import styles from "@/components/about/about.module.css";

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
