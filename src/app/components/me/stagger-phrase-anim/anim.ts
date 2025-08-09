import type { Variants } from "motion/react";

export const slideUpWithY: Variants = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5 }, // base delay + per-item delay
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5, delay: 0.3 },
  },
};

export const parentVariants: Variants = {
  open: {
    transition: {
      delayChildren: 0, // wait before starting
      staggerChildren: 0.15, // gap between each word animation
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // reverse when closing
    },
  },
};
