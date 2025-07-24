"use client";

import React, { useEffect, useRef, useState } from "react";

interface HyperTextProps {
  children: string;
  delay?: number;
  duration?: number;
  stepDuration?: number;
  scrambleFrames?: number;
  className?: string;
  style?: React.CSSProperties;
  characterSet?: string[];
  by?: "char" | "word" | "line"; // <--- NEW
}

const DEFAULT_CHARACTER_SET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{}|;:,.<>?".split(
    "",
  );

export function HyperText2({
  children,
  delay = 0,
  duration,
  stepDuration: _stepDuration = 50,
  scrambleFrames = 4,
  className,
  style,
  characterSet = DEFAULT_CHARACTER_SET,
  by = "char", // <--- NEW
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState("");
  const currentIndex = useRef(0);
  const scrambleCount = useRef(0);
  const raf = useRef<number>(0);

  const targetText = typeof children === "string" ? children : "";

  // Split text based on scrambleBy
  const units = (() => {
    switch (by) {
      case "word":
        return targetText.split(/(\s+)/); // includes spaces as separate units
      case "line":
        return targetText.split(/\r?\n/).map((line) => line + "\n");
      case "char":
      default:
        return targetText.split("");
    }
  })();

  const totalSteps = units.length * (scrambleFrames + 1);
  const stepDuration = duration
    ? Math.max(5, Math.floor(duration / totalSteps))
    : _stepDuration;

  const animate = () => {
    if (currentIndex.current >= units.length) {
      setDisplayText(units.join(""));
      return;
    }

    if (scrambleCount.current < scrambleFrames) {
      const locked = units.slice(0, currentIndex.current).join("");
      const nextUnit = units[currentIndex.current] || "";
      const fakeUnit = /\s/.test(nextUnit)
        ? nextUnit
        : Array.from(nextUnit)
            .map(
              () =>
                characterSet[Math.floor(Math.random() * characterSet.length)],
            )
            .join("");
      setDisplayText(locked + fakeUnit);
      scrambleCount.current++;
    } else {
      currentIndex.current++;
      scrambleCount.current = 0;
      const locked = units.slice(0, currentIndex.current).join("");
      setDisplayText(locked);
    }

    raf.current = window.setTimeout(animate, stepDuration);
  };

  useEffect(() => {
    currentIndex.current = 0;
    scrambleCount.current = 0;
    setDisplayText("");

    const timer = setTimeout(() => {
      animate();
    }, delay);

    return () => {
      clearTimeout(timer);
      if (raf.current) clearTimeout(raf.current);
    };
  }, [children, by]);

  return (
    <span className={className} style={style}>
      {displayText}
    </span>
  );
}
