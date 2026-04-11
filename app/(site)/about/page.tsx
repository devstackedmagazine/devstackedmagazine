"use client";

import AgencyHeroSection from "@/components/about/AgencyHeroSection";
import DreamToRealitySection from "@/components/about/DreamToRealitySection";
import OurJourneySection from "@/components/OurJourneySection";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";

export default function AboutPage() {
  return (
    <div className="relative overflow-visible isolate text-white pb-20">
      <div
        className="pointer-events-none absolute rounded-full blur-[70px] opacity-40 -z-10 w-[620px] h-[620px] top-[40px] -right-[260px] bg-[radial-gradient(circle,rgba(198,14,29,0.55)_0%,rgba(198,14,29,0)_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute rounded-full blur-[70px] opacity-40 -z-10 w-[580px] h-[580px] top-[780px] -left-[260px] bg-[radial-gradient(circle,rgba(198,14,29,0.45)_0%,rgba(198,14,29,0)_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute rounded-full blur-[70px] opacity-40 -z-10 w-[540px] h-[540px] bottom-[120px] -right-[200px] bg-[radial-gradient(circle,rgba(198,14,29,0.4)_0%,rgba(198,14,29,0)_72%)]"
        aria-hidden
      />

      <AgencyHeroSection />
      <DreamToRealitySection />
      <OurJourneySection />
      <StatsSection className="mt-10 mb-50" />
      <CtaSection />
    </div>
  );
}
