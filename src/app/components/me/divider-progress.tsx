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
  useSpring,
} from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef, useState, type ReactElement } from "react";
import { Fade } from "~/app/components/me/animation/fade";
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

type Item = {
  text: string | ReactElement;
  link: string;
  isIcon?: boolean;
};

type Props = {
  _index?: MotionValue;

  padding?: number;
  gap?: number;
  hovered?: boolean;
  items: Item[];
};
export default function DividerProgress({
  _index,
  padding = 20,
  gap = 5,
  hovered = false,
  items = [],
}: Props) {
  const length = items.length;
  const { scrollYProgress } = useScroll({});
  const sY = useTransform(() => scrollYProgress.get() * 100);
  const index = useTransform(sY, [5, 100], [1, length]);
  const progress = useMotionValue(0);
  const trigger = useMotionValue(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const widthRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!index) return;

    // Subscribe to changes
    const unsubscribe = index.on("change", (latest: number) => {
      animate(progress, latest);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
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
      //setIsDragging(true);
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
      <motion.ul
        ref={containerRef}
        // animate={
        //   hovered
        //     ? {
        //         transform: `rotateX(-80deg) translateZ(-60px)`,
        //         opacity: 0,
        //         transition: {
        //           duration: 0.5,
        //         },
        //       }
        //     : {
        //         transform: `rotateX(0) translateZ(0)`,
        //         opacity: 1,
        //       }
        // }
        className={cn(
          `liquid-filter relative h-full w-full items-center select-none`,
          // isDragging ? "cursor-grabbing" : "cursor-grab",

          "flex flex-row items-center justify-center gap-[4px] p-1",
        )}
        layout
      >
        {items.map((item, k) => {
          const xPos = useTransform(
            [progress, trigger],
            ([val, _t]: number[]) => {
              const width = widthRef.current;
              if (width === 0) return padding + k * gap;

              const moveStep = length - k;
              const startMove = moveStep - 1;
              const endMove = moveStep;

              const leftPos = padding + k * gap;
              const rightPos = width - padding - (length - k - 1) * gap;

              const safeVal = val ?? 0;
              if (safeVal <= startMove) return leftPos;
              if (safeVal >= endMove) return rightPos;

              const frac = (safeVal - startMove) / (endMove - startMove);
              return leftPos + frac * (rightPos - leftPos);
            },
          );

          return (
            // circle
            <motion.li
              layout
              key={k}
              // variants={defaultAnimation}

              className={cn(
                "flex flex-wrap items-center justify-center text-xs",

                // "absolute top-1/2 left-0 size-6 -translate-1/2 rounded-full",
                hovered
                  ? "text-m-background bg-m-text relative min-w-40 rounded-full p-2"
                  : "text-m-text-sub bg-m-text absolute top-1/2 left-0 size-6 -translate-1/2 rounded-full",

                hovered && item?.isIcon && "size-11 min-w-12",
              )}
              style={{
                ...(!hovered && { x: xPos }),
                position: hovered ? "relative" : "absolute",
                zIndex: length - k,
                transformOrigin: "center",
              }}
            >
              {/* {Array.from({ length: length - k }).map((_, i) => (
              <span
                key={i}
                className="bg-m-background border-m-background z-10 h-1 w-1 rounded-full border"
              />
            ))} */}
              {/* Background layer with motion opacity */}
              {/* <motion.span
                className={cn(
                  "bg-m-text absolute inset-[0px] z-0 rounded-full opacity-100",
                  hovered ? "rounded-xl" : "rounded-full",
                )}

                // style={{ opacity }}
              /> */}
              {hovered && (
                <Link
                  href={hovered ? item.link : "#"}
                  className={cn(
                    hovered ? "flex" : "hidden",
                    "h-full w-full items-center justify-center text-xl",
                  )}
                >
                  {item.text}
                  {/* <Fade
                    fade="in"
                    to="ToLeft"
                    options={{
                      duration: 0.2,
                    }}
                  >
                  </Fade> */}
                </Link>
              )}
            </motion.li>
          );
        })}

        <motion.div
          initial={{
            width: "90%",
            height: "44px",
          }}
          animate={
            hovered
              ? {
                  width: "100%",
                  height: "100%",
                }
              : {
                  width: "90%",
                  height: "20px",
                }
          }
          className="absolute top-1/2 left-1/2 flex -translate-1/2"
        >
          <motion.div className="via-m-text/50 absolute top-[0%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
          <motion.div
            className={cn(
              "via-m-text/50 absolute top-[25%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent",
              hovered ? "hidden" : "block",
            )}
          />
          <motion.div
            className={cn(
              "via-m-text/50 absolute top-[48%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent",
              hovered ? "hidden" : "block",
            )}
          />
          <motion.div
            className={cn(
              "via-m-text/50 absolute bottom-[25%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent",
              hovered ? "hidden" : "block",
            )}
          />
          <motion.div className="via-m-text/50 absolute bottom-[0%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
        </motion.div>
      </motion.ul>
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
