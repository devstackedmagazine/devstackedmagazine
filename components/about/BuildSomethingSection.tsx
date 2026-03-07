import Image from "next/image";
import heroImage from "@/public/images/home/heroImage.svg";
import styles from "./about.module.css";
import { ArrowRight } from "lucide-react";

export default function BuildSomethingSection() {
  return (
    <section className={styles.buildSection}>
      <div className={styles.buildCard}>
        <div className={styles.buildContent}>
          <h2 className={styles.buildTitle}>
            Let&apos;s Build
            <br />
            Something
            <br />
            <span className={styles.buildTitleAccent}>Amazing</span>
          </h2>

          <p className={styles.buildCopy}>
            Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            risotto garlic dolor sauce marinara Chicago marinara. Tomato dolor
            pesto pesto bianca.
          </p>

          <form className={styles.buildForm}>
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitBtn}>
              <ArrowRight size={14} strokeWidth={2.4} />
            </button>
          </form>
        </div>

        <div className={styles.character} aria-hidden>
          <Image src={heroImage} alt="" className={styles.characterImage} />
        </div>
      </div>
    </section>
  );
}
