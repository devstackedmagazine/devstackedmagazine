import styles from "./about.module.css";

const JOURNEY_STEPS = [
  {
    id: 1,
    title: "Discover",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    className: styles.nodeOne,
  },
  {
    id: 2,
    title: "Discover",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    className: styles.nodeTwo,
  },
  {
    id: 3,
    title: "Discover",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    className: styles.nodeThree,
  },
  {
    id: 4,
    title: "Discover",
    copy: "Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    className: styles.nodeFour,
  },
];

export default function JourneySection() {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeadingStack}>
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <p className={styles.sectionLeadFull}>
          Piza ipsum dolor meat lovers buffalo. Extra broccoli parmesan risotto
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto
          pesto bianca basil all limone.
        </p>
      </div>

      <div className={styles.journeyWrap}>
        <svg
          className={styles.journeySvg}
          viewBox="0 0 1000 280"
          aria-hidden
          preserveAspectRatio="none"
        >
          <path d="M34 90 C 150 30, 280 150, 430 90" />
          <path d="M430 90 C 500 60, 520 220, 600 190" />
          <path d="M600 190 C 700 150, 830 240, 950 180" />
        </svg>

        {JOURNEY_STEPS.map((step) => (
          <article className={`${styles.journeyNode} ${step.className}`} key={step.id}>
            <div className={styles.nodeNumber}>{step.id}</div>
            <div>
              <h3 className={styles.nodeTitle}>{step.title}</h3>
              <p className={styles.nodeCopy}>{step.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.journeyListMobile}>
        {JOURNEY_STEPS.map((step) => (
          <article className={styles.mobileStep} key={`mobile-${step.id}`}>
            <div className={styles.nodeNumber}>{step.id}</div>
            <div>
              <h3 className={styles.nodeTitle}>{step.title}</h3>
              <p className={styles.nodeCopy}>{step.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
