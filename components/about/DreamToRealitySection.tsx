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
    title: "Best Digital Agency",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto garlic dolor sauce marinara Chicago marinara.",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: "Best Digital Agency",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto garlic dolor sauce marinara Chicago marinara.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Best Digital Agency",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto garlic dolor sauce marinara Chicago marinara.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Best Digital Agency",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto garlic dolor sauce marinara Chicago marinara.",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Best Digital Agency",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto garlic dolor sauce marinara Chicago marinara.",
    icon: ChartNoAxesCombined,
  },
  {
    id: 6,
    title: "Best Digital Agency",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto garlic dolor sauce marinara Chicago marinara.",
    icon: Globe,
  },
];

export default function DreamToRealitySection() {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeadingRow}>
        <h2 className={styles.sectionTitle}>Our Dream to Reality</h2>
        <p className={styles.sectionLead}>
          From ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto
          garlic dolor sauce marinara Chicago marinara.
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
