"use client";

import React, { useState, useEffect, useRef } from "react";
import { interpolate } from "flubber";
import { motion, useAnimation, type Easing } from "motion/react";
import { animate } from "motion/react";
import { useTransform } from "motion/react";
import { useMotionValue } from "motion/react";

type SVGMorphProps = {
  paths: [string, string];
  duration?: number;
  delay?: number;
  ease?: Easing;
  onComplete?: () => void;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
} & Omit<
  React.ComponentProps<typeof motion.path>,
  "d" | "stroke" | "fill" | "strokeWidth"
>;

export default function SVGMorph({
  paths,
  duration = 1.5,
  delay = 0,
  ease = "easeInOut",
  onComplete,
  strokeWidth = 2,
  strokeColor = "white",
  fillColor = "white",
  ...rest
}: SVGMorphProps) {
  if (!paths[0] || !paths[1]) {
    throw new Error("SVGMorph: paths[0] and paths[1] must be defined");
  }

  const [step, setStep] = useState<"draw" | "morph">("morph");
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);

  const progress = useMotionValue(0);
  const controls = useAnimation();

  const d = useTransform(progress, [0, 1], [paths[0], paths[1]], {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  const fill = useTransform(progress, [0, 1], ["none", fillColor]);
  const stroke = useTransform(progress, [0, 1], [strokeColor, "none"]);
  const strokeWidthAnim = useTransform(progress, [0, 1], [strokeWidth, 0]);

  // Step 1: Animate stroke draw of initial path
  // useEffect(() => {
  //   if (!pathRef.current) return;
  //   const length = pathRef.current.getTotalLength();
  //   setPathLength(length);

  //   pathRef.current.style.strokeDasharray = `${length}`;
  //   pathRef.current.style.strokeDashoffset = `${length}`;

  //   controls
  //     .start({
  //       strokeDashoffset: 0,
  //       transition: { duration: 1.5, ease },
  //     })
  //     .then(() => {
  //       setStep("morph");
  //     });
  // }, [paths, ease, controls]);

  // Step 2: Morph animation
  useEffect(() => {
    if (step !== "morph") return;

    const morphAnimation = animate(progress, 1, {
      duration,
      delay,
      ease,
      onComplete: () => {
        onComplete?.();
      },
    });

    return () => morphAnimation.stop();
  }, [step, duration, delay, ease, onComplete, progress]);

  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {step === "draw" && (
        <motion.path
          ref={pathRef}
          d={paths[0]}
          strokeLinecap="round"
          strokeWidth="6"
          variants={{
            hidden: { pathLength: 0, opacity: 1 },
            draw: {
              pathLength: 1,

              transition: {
                duration: 1.5,
                ease: [0.317, 0.803, 0.698, -0.024],
              },
            },
          }}
          animate={controls}
          vectorEffect="non-scaling-stroke"
          {...rest}
        />
      )}

      {step === "morph" && (
        <motion.path
          d={d}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidthAnim}
          vectorEffect="non-scaling-stroke"
          {...rest}
        />
      )}
    </motion.svg>
  );
}
