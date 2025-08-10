"use client";

import DividerProgress from "~/app/components/me/divider-progress";
import { motion } from "motion/react";

export default function TopWidget() {
  return (
    <motion.div className="fixed top-[20px] z-50 flex w-full items-center justify-center">
      <motion.div
        initial={{ width: "45px", opacity: 0 }}
        animate={{ width: "130px", opacity: 1 }}
        transition={{
          delay: 4,
          duration: 1.2,
          ease: "easeInOut",
          // ease: [1, 1.015, 0.68, -0.782],
        }}
        style={{
          transformOrigin: "center",
        }}
        className="bg-m-dark/80 relative flex items-center justify-center gap-14 overflow-hidden rounded-3xl backdrop-blur-xl"
      >
        <DividerProgress length={4} />{" "}
      </motion.div>
    </motion.div>
  );
}
