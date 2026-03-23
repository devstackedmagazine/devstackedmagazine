import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/StatsSection";
import OurProjectsSection from "@/components/home/OurProjectsSection";
import OurJourneySection from "@/components/OurJourneySection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/home/FaqSection";
import ellipse from "@/public/styles/elipse-red.svg";

export default function Home() {
  return (
    <div className="relative">
      <img
        src={ellipse.src}
        alt="Ellipse"
        loading="lazy"
        className="absolute top-[-200px] right-[-100px] -z-10 rotate-[160deg] h-[1700px]  scale-[1.5] select-none"
      />
      <HeroSection />
      <img
        src={ellipse.src}
        alt="Ellipse"
        loading="lazy"
        className="absolute h-[500px] top-[150vh] left-0 -z-10 scale-[5] select-none"
      />
      <StatsSection />
      <OurProjectsSection />
      <img
        src={ellipse.src}
        alt="Ellipse"
        loading="lazy"
        className="absolute bottom-[-100px] right-[-50px] w-[400px] h-[500px] rotate-[250deg] -z-10 scale-[5] select-none"
      />
      <OurJourneySection />
      <CtaSection />
      <FaqSection />
    </div>
  );
}
