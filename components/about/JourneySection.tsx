import styles from "./about.module.css";

const JOURNEY_STEPS = [
  {
    id: 1,
    title: "Discover",
    copy: "We begin with the offer, the audience, and the exact job the site needs to do.",
    className: styles.nodeOne,
  },
  {
    id: 2,
    title: "Shape",
    copy: "Then we organize content, direction, and visual hierarchy so the page can carry a clear message.",
    className: styles.nodeTwo,
  },
  {
    id: 3,
    title: "Build",
    copy: "Development stays clean and responsive, with performance, accessibility, and maintainability in view.",
    className: styles.nodeThree,
  },
  {
    id: 4,
    title: "Refine",
    copy: "Before launch, we tighten the details that make the final experience feel deliberate instead of rushed.",
    className: styles.nodeFour,
  },
];

export default function JourneySection() {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeadingStack}>
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <p className={styles.sectionLeadFull}>
          We are less interested in inflated agency language than in doing the
          work well. Every project moves through research, direction, build, and
          refinement with the goal of making the final product clear, fast, and
          useful.
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
