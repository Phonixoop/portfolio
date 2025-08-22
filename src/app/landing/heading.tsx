import { cn } from "~/lib/utils"; // your className utility
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { parentVariants, slideUpWithY } from "./anim";
import StackSvg from "~/app/ui/svgs/stack";

export default function AnimatedHeading({ delay = 0 }: { delay?: number }) {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true }); // only animate the first time

  return (
    <motion.h1
      ref={headingRef}
      className={cn(
        "z-10 overflow-hidden",
        "font-kabel",
        "flex flex-col items-center justify-center",
        "text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl",
        "gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10",
      )}
      variants={parentVariants(delay)}
      initial="closed"
      animate={isInView ? "open" : "closed"}
    >
      <div
        className={cn(
          "flex w-full items-center justify-start gap-2 sm:gap-4 lg:gap-6",
          "text-7xl lg:text-7xl 2xl:text-8xl",
        )}
      >
        <motion.span
          variants={slideUpWithY}
          className="text-m-text-sub flex items-center justify-center"
        >
          I
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className="text-m-text-sub flex items-center justify-center"
        >
          Am
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className="text-m-text flex items-center justify-center"
        >
          Ali
        </motion.span>
      </div>

      <div
        className={cn(
          "flex w-full items-center justify-center gap-2",

          // "sm:ml-[115px] sm:gap-4 md:ml-[115px] lg:ml-[158px] lg:gap-6 xl:ml-[208px] 2xl:ml-[265px]",
          "lg:gap-6 xl:ml-[208px] 2xl:ml-[265px]",
        )}
      >
        <motion.span
          variants={slideUpWithY}
          className="text-m-text-sub col-start-3 row-start-2 flex items-center justify-center sm:leading-14 xl:leading-32"
        >
          Full
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className={cn(
            "text-m-text-sub col-start-3 row-start-2 flex items-center justify-center sm:leading-14 xl:leading-32",
          )}
        >
          Stack
          {/* <StackSvg className="fill-m-text w-[17dvw]" /> */}
        </motion.span>
        <motion.span
          variants={slideUpWithY}
          className="text-m-primary col-start-5 row-start-2 flex items-center justify-center"
        >
          Programmer
        </motion.span>
      </div>
    </motion.h1>
  );
}
