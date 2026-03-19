export const easings = {
  snappy: [0.175, 0.885, 0.32, 1.275] as const,
  elegant: [0.16, 1, 0.3, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
};

export const durations = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.8,
  epic: 1.2,
};

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: durations.medium, ease: easings.smooth },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.slow, ease: easings.elegant },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.slow, ease: easings.elegant },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: durations.medium, ease: easings.snappy },
    },
  },
};

export const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
};
