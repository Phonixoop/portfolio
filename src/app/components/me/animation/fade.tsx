import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type FadeDirection = "ToUp" | "ToDown" | "ToRight" | "ToLeft" | "None";
type FadeType = "in" | "out";

interface FadeProps {
  children: ReactNode;
  className?: string;
  fade?: FadeType; // "in" or "out"
  to?: FadeDirection;
  options?: {
    delay?: number;
    duration?: number;
    fromX?: number;
    fromY?: number;
    toX?: number;
    toY?: number;
  };
}

export function Fade({
  children,
  className,
  fade = "in",
  to = "ToUp",
  options = {},
}: FadeProps) {
  const { delay = 0, duration = 0.6, fromX, fromY, toX, toY } = options;

  // Determine default movement based on `to`
  const defaultOffsets: Record<FadeDirection, { x: number; y: number }> = {
    ToUp: { x: 0, y: 20 },
    ToDown: { x: 0, y: -20 },
    ToRight: { x: -20, y: 0 },
    ToLeft: { x: 20, y: 0 },
    None: { x: 0, y: 0 },
  };

  const startOffset = {
    x: fromX ?? defaultOffsets[to].x,
    y: fromY ?? defaultOffsets[to].y,
  };

  const endOffset = {
    x: toX ?? 0,
    y: toY ?? 0,
  };

  const variants: Variants = {
    hidden: {
      opacity: fade === "in" ? 0 : 1,
      x: fade === "in" ? startOffset.x : endOffset.x,
      y: fade === "in" ? startOffset.y : endOffset.y,
    },
    visible: {
      opacity: fade === "in" ? 1 : 0,
      x: fade === "in" ? endOffset.x : startOffset.x,
      y: fade === "in" ? endOffset.y : startOffset.y,
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
