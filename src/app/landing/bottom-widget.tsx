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

export default function BottomWidget() {
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
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        visible: {
          bottom: 40,
        },
        hidden: {
          bottom: 0,
        },
      }}
      className="fixed bottom-0 flex w-full items-center justify-center"
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
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,

            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
        className="bg-m-background/80 grid grid-cols-3 items-center justify-between gap-14 rounded-3xl p-5 backdrop-blur-xl"
      >
        <div className="flex h-[100px] w-[100px] items-center justify-center">
          <DividerProgress length={4} />{" "}
        </div>
        <div className="w-[100px] items-center justify-center">
          <motion.svg viewBox="0 0 99 105" className={"size-[100px]"}>
            <motion.path
              className="stroke-m-text fill-m-text"
              d={aliPath}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.1,
                ease: [0.317, 0.803, 0.698, -0.024],
              }}
            />
          </motion.svg>
        </div>
        <div className="flex w-full items-center justify-center">
          <Volume2Icon className="text-m-primary size-10 rounded-full p-2 bg-blend-screen" />
        </div>
      </motion.div>
    </motion.div>
  );
}
