import Image from "next/image";
import redDots from "@/public/styles/red-dots.svg";
import styles from "./about.module.css";

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function StatsStrip() {
  return (
    <section className={styles.statsStrip}>
      <Image src={redDots} alt="" className={styles.statsDots} aria-hidden />

      {STATS.map((stat) => (
        <article className={styles.statsItem} key={stat.label}>
          <p className={styles.statsValue}>{stat.value}</p>
          <p className={styles.statsLabel}>
            {stat.label.split(" ").map((word, index) => (
              <span key={`${stat.label}-${word}-${index}`}>{word}</span>
            ))}
          </p>
        </article>
      ))}

      <Image src={redDots} alt="" className={styles.statsDots} aria-hidden />
    </section>
  );
}
