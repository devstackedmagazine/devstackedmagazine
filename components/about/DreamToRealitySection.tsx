import styles from "./about.module.css";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Globe,
  Megaphone,
  Palette,
} from "lucide-react";

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
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeadingRow}>
        <h2 className={styles.sectionTitle}>Our Dream to Reality</h2>
        <p className={styles.sectionLead}>
          From early direction to launch-day polish, we handle the work that
          turns a rough idea into something confident enough to publish.
        </p>
      </div>

      <div className={styles.cardGrid}>
        {FEATURE_CARDS.map((card) => (
          <article className={styles.featureCard} key={card.id}>
            <div className={styles.featureIcon} aria-hidden>
              <card.icon size={15} strokeWidth={1.9} />
            </div>
            <h3 className={styles.featureTitle}>{card.title}</h3>
            <p className={styles.featureCopy}>{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
