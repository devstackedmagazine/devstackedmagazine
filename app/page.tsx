import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import OurProjectsSection from "@/components/home/OurProjectsSection";
import OurJourneySection from "@/components/home/OurJourneySection";
import CtaSection from "@/components/home/CtaSection";
import ellipse from "@/public/styles/elipse-red.svg";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src={ellipse}
        alt="Ellipse"
        className="absolute top-[-200px] right-[-100px] -z-10 rotate-[160deg] h-[1700px]  scale-[1.5] select-none"
      />
      <HeroSection />
      <Image
        src={ellipse}
        alt="Ellipse"
        className="absolute h-[500px] top-[150vh] left-0 -z-10 scale-[5] select-none"
      />
      <StatsSection />
      <OurProjectsSection />
      <Image
        src={ellipse}
        alt="Ellipse"
        className="absolute bottom-[-100px] right-[-50px] w-[400px] h-[500px] rotate-[250deg] -z-10 scale-[5] select-none"
      />
      <OurJourneySection />
      <CtaSection />
    </div>
  );
}
