import type { Variants } from "motion/react";

export const slideUpWithY: Variants = {
  initial: {
    y: "120%",
  },
  open: (i: number) => ({
    y: "0%",

    transition: { duration: 0.5 }, // base delay + per-item delay
  }),
  closed: {
    y: "120%",

    transition: { duration: 0.5, delay: 0.3 },
  },
};

export const parentVariants = (delay: number = 0): Variants => ({
  open: {
    transition: {
      delayChildren: delay, // dynamic delay from outside
      staggerChildren: 0.12, // gap between each word animation
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // reverse when closing
    },
  },
});
