import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  type Variants,
  stagger,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

// const defaultAnimation: Variants = {
//   hidden: { x: "200%" },
//   animate: {
//     x: "0%",
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };

export default function DividerProgress({
  _index,
  length,
  padding = 10,
  gap = 5,
}: {
  _index?: MotionValue;
  length: number;
  padding?: number;
  gap?: number;
}) {
  const { scrollYProgress } = useScroll({});
  const sY = useTransform(() => scrollYProgress.get() * 100);
  const index = useTransform(sY, [0, 100], [1, length]);
  const progress = useMotionValue(0);
  const trigger = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return index.onChange((latest) => {
      animate(progress, latest);
    });
  }, [index, progress]);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        widthRef.current = containerRef.current.clientWidth;
        trigger.set(trigger.get() + 1);
      }
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleStart = () => {
      setIsDragging(true);
    };

    const handleMove = (clientX: number) => {
      if (!isDragging) return;

      const screenWidth = window.innerWidth;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const ratio = Math.min(Math.max(clientX / screenWidth, 0), 1);
      window.scrollTo({
        top: scrollHeight * ratio,
        behavior: "auto",
      });
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) =>
      handleMove(e.touches[0] ? e.touches[0].clientX : 0);

    const handleEnd = () => {
      setIsDragging(false);
    };

    // Desktop
    el.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);

    // Mobile
    el.addEventListener("touchstart", handleStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleEnd);

    return () => {
      el.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);

      el.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <>
      <motion.div
        ref={containerRef}
        className={cn(
          `liquid-filter relative flex h-11 w-28 items-center select-none`,
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
      >
        <div className="via-m-secondary/50 absolute top-[28%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
        <div className="via-m-secondary/50 absolute top-[38%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
        <div className="via-m-secondary/50 absolute top-[48%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
        <div className="via-m-secondary/50 absolute bottom-[38%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
        <div className="via-m-secondary/50 absolute bottom-[28%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />

        {Array.from({ length }).map((_, k) => {
          const xPos = useTransform(
            [progress, trigger],
            ([val, _t]: number[]) => {
              const width = widthRef.current;
              if (width === 0) return padding + k * gap;

              const moveStep = length - k;
              const startMove = moveStep - 1;
              const endMove = moveStep;

              const leftPos = padding + k * gap;
              const rightPos = width - padding - (length - k) * gap;

              const safeVal = val ?? 0;
              if (safeVal <= startMove) return leftPos;
              if (safeVal >= endMove) return rightPos;

              const frac = (safeVal - startMove) / (endMove - startMove);
              return leftPos + frac * (rightPos - leftPos);
            },
          );
          // Calculate fade steps:
          // const moveStep = length - k;
          // const startMove = moveStep - 1;
          // const endMove = moveStep;

          // const opacity = useTransform(progress, (val) => {
          //   if (val <= startMove) return 0;
          //   if (val >= endMove) return 1;
          //   return (val - startMove) / (endMove - startMove);
          // });

          return (
            // circle
            <motion.div
              key={k}
              // variants={defaultAnimation}

              className="border-m-secondary text-m-background absolute top-1/2 left-0 flex size-6 -translate-1/2 flex-wrap items-center justify-center rounded-full text-xs backdrop-blur-2xl"
              style={{ x: xPos, zIndex: length - k }}
            >
              {/* {Array.from({ length: length - k }).map((_, i) => (
              <span
                key={i}
                className="bg-m-background border-m-background z-10 h-1 w-1 rounded-full border"
              />
            ))} */}
              {/* Background layer with motion opacity */}
              <motion.span
                className="bg-m-secondary absolute inset-[0px] z-0 rounded-full opacity-100"

                // style={{ opacity }}
              />
            </motion.div>
          );
        })}
      </motion.div>
      <svg className="hidden">
        <defs>
          <filter id="liquid">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            <feColorMatrix
              in="name"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 30 -15"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
