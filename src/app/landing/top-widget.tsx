"use client";
import {
  animate,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import DividerProgress from "~/app/components/me/divider-progress";
import { motion } from "motion/react";
import { aliPath } from "~/app/ui/svgs/ali";
import { Volume2Icon } from "lucide-react";

export default function TopWidget() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      //   animate={isHidden ? "hidden" : "visible"}
      //   variants={{
      //     visible: {
      //       y: 20,
      //     },
      //     hidden: {
      //       y: 15,
      //     },
      //   }}
      className="fixed top-[20px] z-50 flex w-full items-center justify-center"
    >
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          visible: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,

            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          hidden: {
            // borderTopLeftRadius: 0,
            // borderTopRightRadius: 0,
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20,
          },
        }}
        className="bg-m-dark/80 items-center justify-between gap-14 rounded-3xl px-3 backdrop-blur-xl"
      >
        <DividerProgress length={4} />{" "}
      </motion.div>
    </motion.div>
  );
}
