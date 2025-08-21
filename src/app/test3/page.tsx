"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from "motion/react";

type EnterDir = "rtl" | "ltr" | "ttb" | "btt" | "flow";

type SectionSpec = {
  id: any;
  Component: any;
  enter: EnterDir;
  peekVW?: number;
  peekVH?: number;
};

function First({ children }: { children: any }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-emerald-950 text-4xl text-white">
      {children}
    </div>
  );
}
function Second({ children }: { children: any }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-yellow-950 text-4xl text-white">
      {children}
    </div>
  );
}
function Third({ children }: { children: any }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-red-950 text-4xl text-white">
      {children}
    </div>
  );
}

const SECTIONS: SectionSpec[] = [
  { id: 0, Component: First, enter: "rtl", peekVW: 0 },
  { id: 1, Component: Second, enter: "rtl", peekVW: 5 },
  { id: 2, Component: Third, enter: "rtl", peekVW: 5 },
];

export default function Page() {
  const N = SECTIONS.length;
  const transitions = Math.max(1, N - 1);

  const targetRef = useRef<HTMLDivElement>(null);
  const containerHeight = `${transitions * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={targetRef}
      className="relative"
      style={{ height: containerHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {SECTIONS.map((section, i) => {
          let scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

          const pvI = Math.max(i - 1, 0);
          const currentI = i;
          const nextI = Math.min(i + 2, SECTIONS.length - 1);

          const { inX: x1 } = sectionTransforms(section, scrollYProgress, i);

          const { inX: x2 } = sectionTransforms(
            section,
            scrollYProgress,
            i + 1,
          );
          const x3 = useTransform(
            scrollYProgress,
            [0, 1],
            ["-100dvw", `${section.peekVW}dvw`],
          );
          return (
            <motion.div
              key={section.id}
              className="absolute inset-0 will-change-transform"
              style={{
                x: x1,
                scale: section.id === pvI ? scale : 1,
                zIndex: i,
              }}
            >
              <section.Component>
                <div className="flex flex-col">
                  <motion.span> index : {i}</motion.span>
                  <motion.span>{x1}</motion.span>
                </div>
              </section.Component>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function sectionTransforms(
  section: SectionSpec,
  t: MotionValue<number>,
  index: number,
): { inX?: MotionValue<string>; inY?: MotionValue<string> } {
  const peekVW = section.peekVW ?? 0;
  const peekVH = section.peekVH ?? 0;

  let startX: string | null = null;
  let startY: string | null = null;

  let leftOrRight = 0;
  const distance = 100 * index;
  switch (section.enter) {
    case "rtl":
      startX = `${distance - peekVW}dvw`;
      leftOrRight = 1;
      break;
    case "ltr":
      leftOrRight = -1;
      startX = `${-distance + peekVW}dvw`;
      break;
    case "ttb":
      startY = `${-distance + peekVH}dvh`;
      break;
    case "btt":
      startY = `${distance - peekVH}dvh`;
      break;
    case "flow":
      startY = `10dvh`;
      break;
  }

  const inX =
    startX !== null
      ? useTransform(
          t,
          [0, 1],
          [`${leftOrRight * distance - peekVW}dvw`, "0dvw"],
        )
      : undefined;
  const inY =
    startY !== null ? useTransform(t, [0, 1], [startY, "0dvh"]) : undefined;

  return { inX, inY };
}

// TODO : add svg fluid to page
