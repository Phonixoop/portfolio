import type { Variants } from "motion/react";

export const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100dvh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const slideUpV2: Variants = {
  initial: {
    top: "-50vh",
  },

  exit: {
    top: ["-50dvh", "0vh", "-100dvh"],
    transition: {
      duration: 1.2, // total duration
      times: [0, 0.4, 1], // 0 → 0.4 for first part, 0.4 → 1 for second part
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};
