"use client";
import { motion, useTransform, useScroll, MotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import ProjectsSection from "~/app/(sections)/2";
import HeroSection from "~/app/(sections)/hero";
import type LocomotiveScroll from "locomotive-scroll";

export default function TestPage2() {
  const locomotiveScrollRef = useRef<LocomotiveScroll>(null);
  // LocomotiveScroll load
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.1,
          duration: 1.5,
          wheelMultiplier: 2.5,
          infinite: true,
        },
      });

      document.body.style.cursor = "default";
      locomotiveScrollRef.current.scrollTo(0, { duration: 0, lerp: 0 });
    })();
  }, []);
  return (
    <div data-scroll-section className="bg-neutral-800">
      <HorizontalScrollCarousel />
      <HorizontalScrollCarousel direction="rtl" />
      <div className="flex h-screen items-center justify-center">
        <span className="font-semibold text-neutral-500 uppercase">
          Scroll up
        </span>
      </div>
      <div className="flex h-screen items-center justify-center">
        <span className="font-semibold text-neutral-500 uppercase">
          Scroll up
        </span>
      </div>
      <div className="flex h-screen items-center justify-center"></div>
    </div>
  );
}

type Direction = "ltr" | "rtl" | "ttb" | "btt";

const HorizontalScrollCarousel = ({
  direction = "ltr",
}: {
  direction?: Direction;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Default transforms
  let x: MotionValue<string> | undefined;
  let y: MotionValue<string> | undefined;

  switch (direction) {
    case "ltr":
      x = useTransform(
        scrollYProgress,
        [0, 0.65, 1],
        ["0%", "-95dvw", "-95dvw"],
      );
      break;
    case "rtl":
      x = useTransform(scrollYProgress, [0, 0.65, 1], ["0%", "95dvw", "95dvw"]);
      break;
    case "ttb":
      y = useTransform(
        scrollYProgress,
        [0, 0.65, 1],
        ["0%", "-95dvh", "-95dvh"],
      );
      break;
    case "btt":
      y = useTransform(scrollYProgress, [0, 0.65, 1], ["0%", "95dvh", "95dvh"]);
      break;
  }

  const scaleAndOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={targetRef} className="bg-m-background relative h-[300vh]">
      {" "}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden overflow-x-hidden">
        {" "}
        <motion.div className="flex h-screen snap-x gap-4">
          {" "}
          <motion.div
            style={{ scale: scaleAndOpacity, opacity: scaleAndOpacity }}
            className="z-0 w-[95dvw] overflow-hidden"
          >
            {" "}
            <HeroSection />{" "}
          </motion.div>{" "}
          <motion.div
            style={{ x }}
            transition={{ duration: 5 }}
            className="w-[100dvw] snap-center overflow-hidden"
          >
            {" "}
            <ProjectsSection />{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
};
