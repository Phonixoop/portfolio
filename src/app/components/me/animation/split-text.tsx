"use client";

import { motion, type Variants } from "motion/react";
import { type ElementType } from "react";

interface AnimatedTextProps {
  text: string;
  as?: ElementType;
  delay?: number;
  className?: string;
  gap?: number | string; // space between chars/words
  char?: string; // splitting character
  once?: boolean; // splitting character
}

export default function AnimatedText({
  text,
  as: Component = "span",
  delay = 0,
  className,
  gap = 0,
  char = "", // default split by character
  once = true,
  ...props
}: AnimatedTextProps) {
  // Split text based on char prop
  const letters = char ? text.split(char) : Array.from(text);

  // Wrap arbitrary element in motion
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  const child2: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };
  return (
    <MotionComponent className={`inline-block ${className ?? ""}`} {...props}>
      {/* Screen reader full text */}
      <span className="sr-only">{text}</span>

      {/* Animated chars */}
      <motion.span
        aria-hidden="true"
        className="inline-flex"
        style={{ gap }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        {letters.map((charItem, i) => (
          <motion.span key={i} variants={child}>
            {charItem === " " ? "\u00A0" : charItem}
          </motion.span>
        ))}
      </motion.span>
    </MotionComponent>
  );
}
