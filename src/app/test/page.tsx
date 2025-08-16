"use client";

import React from "react";
import SubHeading from "~/app/landing/sub-heading";
import { motion, stagger, type Variants } from "motion/react";
import DividerProgress from "~/app/components/me/divider-progress";

const defaultAnimation: Variants = {
  hidden: { left: "50%", x: "-50%" },
  animate: {
    left: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function PageTest() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-5">
        <SubHeading />
        <motion.div
          initial="hidden"
          animate="animate"
          transition={{ delayChildren: stagger(0.05) }}
          className="bg-m-dark relative h-11 w-[130px] rounded-full"
        >
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <motion.span
                key={i}
                variants={defaultAnimation}
                className="bg-m-secondary absolute top-1/2 left-0 size-4 -translate-y-1/2 rounded-full"
              />
            );
          })}
        </motion.div>
        <div className="fixed top-5">
          {" "}
          {/* <DividerProgress length={4} />{" "} */}
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}
