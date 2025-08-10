import { stagger, type Variants } from "motion/react";

export const slideUpWithY: Variants = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
  }),
  closed: {
    y: "100%",
  },
};

export const parentVariants: Variants = {
  open: {
    transition: {
      delayChildren: stagger(0.5), // wait before starting
    },
  },
  closed: {
    transition: {
      delayChildren: stagger(0.05), // wait before starting
      staggerDirection: -1, // reverse when closing
    },
  },
};
