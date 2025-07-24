"use client";

import { cn } from "~/lib/utils";
import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CharacterSet = string[] | readonly string[];

interface HyperTextProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  animateOnHover?: boolean;
  characterSet?: CharacterSet;
  blurLead?: number; // ← new prop
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+".split(""),
) as readonly string[];

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export function HyperBlurText({
  children,
  className,
  duration = 1000,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  blurLead = 2,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayText, setDisplayText] = useState<(string | undefined)[]>(() =>
    children.split(""),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (!startOnView) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => setIsAnimating(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" },
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!isAnimating) return;

    const total = children.length;
    const start = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const index = Math.floor(progress * total);

      setCurrentIndex(index);

      const scrambled = children.split("").map((char, i) => {
        if (char === " ") return " ";
        if (i <= index) return char;
        return characterSet[getRandomInt(characterSet.length)];
      });

      setDisplayText(scrambled);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isAnimating, characterSet, children, duration]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-2 font-bold", className)}
      onMouseEnter={handleAnimationTrigger}
      {...props}
    >
      <AnimatePresence mode="wait">
        {displayText.map((char, i) => {
          const isSettled = i <= currentIndex;
          const isUnblurring = i <= currentIndex + blurLead;

          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(0px)" }}
              animate={{
                opacity: isUnblurring ? 1 : 0.4,
                filter: isUnblurring ? "blur(0px)" : "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.03,
                ease: "easeOut",
              }}
              className={cn("inline-block font-mono", char === " " && "w-2")}
            >
              {char}
            </motion.span>
          );
        })}
      </AnimatePresence>
    </MotionComponent>
  );
}
