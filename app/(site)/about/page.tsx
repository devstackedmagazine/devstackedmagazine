import AgencyHeroSection from "@/components/about/AgencyHeroSection";
import DreamToRealitySection from "@/components/about/DreamToRealitySection";
import OurJourneySection from "@/components/OurJourneySection";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import styles from "@/components/about/about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.bgGlowOne} aria-hidden />
      <div className={styles.bgGlowTwo} aria-hidden />
      <div className={styles.bgGlowThree} aria-hidden />

      <AgencyHeroSection />
      <DreamToRealitySection />
      <OurJourneySection />
      <StatsSection className="mt-10 mb-50" />
      <CtaSection />
    </div>
  );
}
