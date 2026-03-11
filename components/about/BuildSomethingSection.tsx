import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/home/heroImage.svg";
import styles from "./about.module.css";

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
            If you have a launch coming up, a site that needs sharper structure,
            or a product page that is not pulling its weight, we can help you
            clean it up and ship it properly.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-red-active px-6 text-sm font-medium text-white transition-colors hover:bg-red-active-hover"
            >
              Start a project
            </Link>
            <a
              href="mailto:devstackedmagazine@gmail.com"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              devstackedmagazine@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.character} aria-hidden>
          <Image src={heroImage} alt="" className={styles.characterImage} />
        </div>
      </div>
    </section>
  );
}
