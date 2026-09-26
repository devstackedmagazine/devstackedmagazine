/** Single site-wide curve (DESIGN.md §6). */
export const ease = [0.22, 1, 0.36, 1] as const;

/** DESIGN.md §6: entry 340ms, exit 220ms, micro-interaction 140ms. */
export const durations = {
  entry: 0.34,
  exit: 0.22,
  micro: 0.14,
};

/** 60ms per item, capped at 8 — item 9+ shares item 8's delay. */
export function staggerDelay(index: number, stepSeconds = 0.06, cap = 8) {
  return Math.min(index, cap - 1) * stepSeconds;
}

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: durations.entry, ease },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.entry, ease },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.entry, ease },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: durations.entry, ease },
    },
  },
};

export const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
};
