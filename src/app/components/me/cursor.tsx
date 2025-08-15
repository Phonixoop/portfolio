"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TargetOptions {
  padding: number; // Extra space around the target
  matchShape: boolean; // If false => stay circle
}

const DEFAULT_SIZE = 24;
const ELASTIC_CONFIG = { stiffness: 300, damping: 20, mass: 0.5 };

export default function StickyCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Animate position and size
  const springX = useSpring(mouseX, ELASTIC_CONFIG);
  const springY = useSpring(mouseY, ELASTIC_CONFIG);
  const [width, setWidth] = useState(DEFAULT_SIZE);
  const [height, setHeight] = useState(DEFAULT_SIZE);
  const [borderRadius, setBorderRadius] = useState("50%");

  const sizeSpringX = useSpring(width, ELASTIC_CONFIG);
  const sizeSpringY = useSpring(height, ELASTIC_CONFIG);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - width / 2);
      mouseY.set(e.clientY - height / 2);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const targetEl = (e.target as HTMLElement).closest(
        ".cursor-target",
      ) as HTMLElement | null;

      if (!targetEl) return;

      const paddingAttr = targetEl.getAttribute("data-cursor-padding");
      const matchShapeAttr = targetEl.getAttribute("data-cursor-match-shape");

      const options: TargetOptions = {
        padding: paddingAttr ? parseInt(paddingAttr) : 0,
        matchShape: matchShapeAttr !== "false", // default true
      };

      const rect = targetEl.getBoundingClientRect();
      const padding = options.padding;

      const newWidth = options.matchShape
        ? rect.width + padding * 2
        : DEFAULT_SIZE + padding * 2;
      const newHeight = options.matchShape
        ? rect.height + padding * 2
        : DEFAULT_SIZE + padding * 2;

      setWidth(newWidth);
      setHeight(newHeight);

      setBorderRadius(
        options.matchShape
          ? window.getComputedStyle(targetEl).borderRadius
          : "50%",
      );

      // Snap to target center with elastic effect
      mouseX.set(rect.left + rect.width / 2 - newWidth / 2);
      mouseY.set(rect.top + rect.height / 2 - newHeight / 2);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".cursor-target")) {
        setWidth(DEFAULT_SIZE);
        setHeight(DEFAULT_SIZE);
        setBorderRadius("50%");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [width, height, mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
        width: sizeSpringX,
        height: sizeSpringY,
        borderRadius: borderRadius,
      }}
      className="bg-m-foreground pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
    />
  );
}
