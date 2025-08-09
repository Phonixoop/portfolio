import { cn } from "~/lib/utils"; // your className utility
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { parentVariants, slideUpWithY } from "./anim";

export default function AnimatedHeading() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true }); // only animate the first time

  return (
    <motion.h1
      ref={headingRef}
      className={cn(
        "overflow-hidden",
        "font-kabel",
        "flex flex-col items-center justify-center",
        "text-xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl",
        "gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10",
      )}
      variants={parentVariants}
      initial="closed"
      animate={isInView ? "open" : "closed"}
    >
      <div className="flex w-full items-center justify-start gap-2 sm:gap-4 lg:gap-6">
        <motion.span
          variants={slideUpWithY}
          className="text-m-text flex items-center justify-center"
        >
          Code
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className="text-m-text/20 flex items-center justify-center"
        >
          in
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className="text-m-text/20 flex items-center justify-center"
        >
          rhythm
        </motion.span>
      </div>

      <div
        className={cn(
          "flex w-full items-center justify-center gap-2",
          "ml-[97px] sm:ml-[177px] sm:gap-4 md:ml-[177px] lg:ml-[240px] lg:gap-6 xl:ml-[338px] 2xl:ml-[435px]",
        )}
      >
        <motion.span
          variants={slideUpWithY}
          className="text-m-text col-start-3 row-start-2 flex items-center justify-center sm:leading-14 xl:leading-32"
        >
          Design
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className="text-m-text/20 col-start-4 row-start-2 flex items-center justify-center"
        >
          within
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className="text-m-text/20 col-start-5 row-start-2 flex items-center justify-center"
        >
          harmony
        </motion.span>
      </div>
    </motion.h1>
  );
}
