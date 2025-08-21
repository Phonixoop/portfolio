"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { HyperText2 } from "~/app/components/magicui/hyper-text-2";
import { MotionEl } from "~/app/components/motion/motion-element";
import { motion, useInView } from "motion/react";
import { cn } from "~/lib/utils";
export const projects = [
  {
    title: "Instant Gifting",
    description:
      "Eco-friendly digital gift platform with unique shareable links",
    year: "2024",
    href: "#",
  },
  {
    title: "KPI tracking",
    description: "Automated KPI tracking with real-time dashboards",
    year: "2023",
    href: "/projects/performance-automation",
  },
  {
    title: "Room Reservation",
    description: "Conflict-free meeting room booking with optional services",
    year: "2023",
    href: "#",
  },
  {
    title: "Food Delivery",
    description: "Custom meal builder and scheduled deliveries",
    year: "2022",
    href: "#",
  },
  {
    title: "Catering Planner",
    description: "Legacy system upgrade with multi-role meal planning",
    year: "2022",
    href: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      {projects.map((project, i) => (
        <MotionEl
          key={i}
          as={Link}
          href={project.href}
          fade="in"
          trigger="always"
          slideFrom="top"
          className="font-iransans hover:bg-m-light/50 relative flex w-full items-center gap-3 overflow-hidden rounded-xl p-3 outline-0 hover:backdrop-blur-3xl"
        >
          <HyperText2
            trigger="onViewOnce"
            className="text-m-primary cursor-target inline-block text-2xl font-bold"
            duration={250}
          >
            {project.title}
          </HyperText2>

          <HyperText2
            trigger="onViewOnce"
            className="text-m-text/70 hidden text-base font-light md:inline-block"
            duration={250}
            delay={250}
          >
            {project.description}
          </HyperText2>

          <motion.div
            className={cn(
              "relative shrink grow basis-0",
              isInView && "line-anim",
            )}
          />
          <HyperText2
            trigger="onViewOnce"
            duration={2000}
            by="char"
            className="text-m-text block text-xl"
          >
            {project.year}
          </HyperText2>
        </MotionEl>
      ))}
    </div>
  );
}
