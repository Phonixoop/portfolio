"use client";

import { type ReactNode, useRef, Children } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type HorizontalScrollSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function HorizontalScrollSection({
  children,
  className,
}: HorizontalScrollSectionProps) {
  const childCount = Children.count(children);

  return (
    <section
      data-scroll-section
      className={`relative h-screen w-screen overflow-hidden ${className || ""}`}
    >
      <div
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        style={{ width: `${childCount * 100}vw` }}
        className="flex h-full"
      >
        {Children.map(children, (child, i) => (
          <div key={i} className="h-screen w-screen flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
