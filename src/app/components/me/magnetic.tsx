"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

export default function Magnetic({
  children,
}: {
  children: React.ReactElement;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 10 });
  const springY = useSpring(y, { stiffness: 300, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const offsetX = e.clientX - (bounds.left + bounds.width / 2);
    const offsetY = e.clientY - (bounds.top + bounds.height / 2);

    x.set(offsetX * 0.5);
    y.set(offsetY * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
