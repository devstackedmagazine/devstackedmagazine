import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import OurProjectsSection from "@/components/home/OurProjectsSection";
import OurJourneySection from "@/components/home/OurJourneySection";
import CtaSection from "@/components/home/CtaSection";
import { absoluteUrl, siteConfig } from "@/lib/site";
import ellipse from "@/public/styles/elipse-red.svg";

export const metadata: Metadata = {
  title: "Web Design, Development, and Tech Content",
  description:
    "Explore DevStacked Magazine for modern website design, development support, landing page work, and practical tech content shaped by real projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevStacked Magazine | Web Design, Development, and Tech Content",
    description:
      "Modern websites, product-facing experiences, and practical tech content from a team focused on speed, clarity, and usability.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "DevStacked Magazine website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevStacked Magazine | Web Design, Development, and Tech Content",
    description:
      "Modern websites, product-facing experiences, and practical tech content from a team focused on speed, clarity, and usability.",
    images: [siteConfig.ogImage],
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.ogImage),
  email: siteConfig.email,
  description:
    "Design and development studio creating fast websites, landing pages, and digital experiences for brands, founders, and product teams.",
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageJsonLd),
        }}
      />
    </div>
  );
}
