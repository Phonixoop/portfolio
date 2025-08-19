"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

import HeroSection from "~/app/(sections)/hero";
import ProjectsSection from "~/app/(sections)/2";
// import AboutSection from "~/app/(sections)/about";
// import ContactSection from "~/app/(sections)/contact";

type EnterDir = "rtl" | "ltr" | "ttb" | "btt" | "flow";

type SectionSpec = {
  id: string;
  Component: React.ComponentType;
  /** how this section ENTERS when it becomes visible */
  enter: EnterDir;
  /** optional preview while off-screen (device units) */
  peekVW?: number; // e.g. 5 => 5dvw visible from side
  peekVH?: number; // e.g. 5 => 5dvh visible from top/bottom
};

function First() {
  return <div className="h-screen w-screen bg-emerald-950"></div>;
}
function Second() {
  return <div className="h-screen w-screen bg-pink-950"></div>;
}
function Third() {
  return <div className="h-screen w-screen bg-amber-950"></div>;
}
/** Configure your chain (order matters) */
const SECTIONS: SectionSpec[] = [
  { id: "hero", Component: First, enter: "rtl" },
  { id: "projects", Component: Second, enter: "rtl", peekVW: 5 },
  {
    id: "Third",
    Component: Third,
    enter: "ltr",
    peekVW: 5,
  },

  // { id: "about",    Component: AboutSection,    enter: "ttb" },
  // { id: "contact",  Component: ContactSection,  enter: "flow" },
];

export default function Page() {
  const N = SECTIONS.length;
  const transitions = Math.max(0, N - 1);

  // If only one section, render it directly
  if (transitions === 0) {
    const Only = SECTIONS[0]?.Component ?? (() => <div>Loading...</div>);
    return <Only />;
  }

  const targetRef = useRef<HTMLDivElement>(null);

  // Make the wrapper height exactly one viewport per transition
  // -> one "scroll" drives exactly one pair animation.
  const containerHeight = `${transitions * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // clean 0..1 mapping along the wrapper
  });

  const step = 1 / transitions;

  // Keep the active pair index in state (0..transitions-1)
  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (p) => {
      const raw = Math.floor(p / step);
      const i = Math.max(0, Math.min(raw, transitions - 1));
      setPairIndex(i);
    });
    return () => unsub();
  }, [scrollYProgress, step, transitions]);

  // Normalized progress in the current pair [0..1]
  const pairStart = pairIndex * step;
  const pairEnd = (pairIndex + 1) * step;
  const t = useTransform(scrollYProgress, [pairStart, pairEnd], [0, 1]);

  // Active sections
  const outgoing = SECTIONS[pairIndex]!;
  const incoming = SECTIONS[pairIndex + 1]!;

  // Outgoing transforms (scale down & fade out)
  const outScale = useTransform(t, [0, 1], [1, 0]);
  const outOpacity = useTransform(t, [0, 1], [1, 0]);

  // Incoming transforms (slide in based on its own enter direction)
  const { inX, inY } = incomingTransforms(incoming, t);

  // z-index: ensure stable overlap (incoming above outgoing)
  const zOutgoing = pairIndex * 2 + 1;
  const zIncoming = pairIndex * 2 + 2;

  const OutComp = outgoing.Component;
  const InComp = incoming.Component;

  return (
    <div
      ref={targetRef}
      className="relative"
      style={{ height: containerHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Outgoing (beneath) */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            scale: outScale,
            opacity: outOpacity,
            zIndex: zOutgoing as number,
          }}
        >
          <OutComp />
        </motion.div>

        {/* Incoming (above) */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ x: inX, y: inY, zIndex: zIncoming as number }}
        >
          <InComp />
        </motion.div>
      </div>
    </div>
  );
}

/** Compute incoming x/y offsets with optional peek in dvw/dvh. */
function incomingTransforms(
  section: SectionSpec,
  t: MotionValue<number>,
): { inX?: MotionValue<string>; inY?: MotionValue<string> } {
  const peekVW = section.peekVW ?? 0;
  const peekVH = section.peekVH ?? 0;

  // Start positions using device viewport units (dvw/dvh)
  // Example: "rtl" enters from the right; show `peekVW` dvw peeking in.
  let startX: string | null = null;
  let startY: string | null = null;

  switch (section.enter) {
    case "rtl":
      startX = `${100 - peekVW}dvw`; // from right
      break;
    case "ltr":
      startX = `${-100 + peekVW}dvw`; // from left
      break;
    case "ttb":
      startY = `${-100 + peekVH}dvh`; // from top
      break;
    case "btt":
      startY = `${100 - peekVH}dvh`; // from bottom
      break;
    case "flow":
      // "flow" = subtle vertical slide-in (optional)
      startY = `10dvh`;
      break;
  }

  const inX =
    startX !== null ? useTransform(t, [0, 1], [startX, "0dvw"]) : undefined;

  const inY =
    startY !== null ? useTransform(t, [0, 1], [startY, "0dvh"]) : undefined;

  return { inX, inY };
}
