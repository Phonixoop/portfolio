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
import Button from "~/app/ui/buttons";
import TopWidget, { menuItems } from "~/app/landing/top-widget";

export default function BottomWidget() {
  // const [isHidden, setIsHidden] = useState(false);
  // const { scrollY } = useScroll();
  // const lastYRef = useRef(0);

  // useMotionValueEvent(scrollY, "change", (y) => {
  //   const difference = y - lastYRef.current;

  //   if (Math.abs(difference) > 50) {
  //     setIsHidden(difference > 0);
  //     lastYRef.current = y;
  //   }
  // });

  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      variants={{
        visible: {
          bottom: 40,
          transition: {
            delay: 5,
            duration: 0.5,
            ease: "easeInOut",
          },
        },
        hidden: {
          bottom: -100,
        },
      }}
      id="bottom-widget-container"
      className="fixed bottom-4 z-50 flex w-full items-center justify-center"
    >
      <motion.div
        // animate={isHidden ? "hidden" : "visible"}
        // variants={{
        //   visible: {
        //     borderTopLeftRadius: 20,
        //     borderTopRightRadius: 20,

        //     borderBottomLeftRadius: 20,
        //     borderBottomRightRadius: 20,
        //   },
        //   hidden: {
        //     borderTopLeftRadius: 20,
        //     borderTopRightRadius: 20,

        //     borderBottomLeftRadius: 0,
        //     borderBottomRightRadius: 0,
        //   },
        // }}
        className="from-m-primary/20 to-m-text/20 flex items-center justify-between gap-10 rounded-full bg-gradient-to-r p-1 backdrop-blur-2xl"
      >
        <Button className="bg-m-background flex max-h-12 shrink-0 items-center justify-center rounded-full px-3 py-2">
          <div className="items-center justify-center">
            <motion.svg viewBox="0 0 99 105" className={"size-8"}>
              <motion.path
                className="fill-m-primary"
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
        </Button>
        {/* <div className="bg-m-background relative flex h-12 w-[130px] items-center justify-center gap-14 overflow-hidden rounded-3xl">
          <nav className="flex h-full w-full items-start justify-center">
            <DividerProgress hovered={false} items={menuItems} />
          </nav>
        </div> */}
        <Button className="bg-m-primary max-h-12 shrink-0 rounded-full p-3">
          Contact me
        </Button>
      </motion.div>
    </motion.div>
  );
}
