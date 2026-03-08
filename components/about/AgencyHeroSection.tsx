import Image from "next/image";
import redDots from "@/public/styles/red-dots.svg";
import styles from "./about.module.css";

export default function AgencyHeroSection() {
  return (
    <section className={styles.heroSection}>
      <Image src={redDots} alt="" className={styles.heroDotsTop} aria-hidden />
      <span className={styles.outlineWord}>About</span>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          The People Behind
          <br />
          The <span className={styles.heroTitleAccent}>Pixels</span>
        </h1>
      </div>
      <Image
        src={redDots}
        alt=""
        className={styles.heroDotsBottom}
        aria-hidden
      />
    </section>
  );
}
