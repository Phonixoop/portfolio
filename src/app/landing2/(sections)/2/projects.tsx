import Link from "next/link";
import React from "react";
import { HyperText2 } from "~/app/components/magicui/hyper-text-2";
import { MotionEl } from "~/app/components/motion/motion-element";
const projects = [
  {
    title: "Instant Gifting",
    description:
      "Eco-friendly digital gift platform with unique shareable links",
    year: "2024",
    href: "#",
  },
  {
    title: "From Manual Chaos to Automated Insight",
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
  return (
    <>
      {projects.map((project, i) => (
        <MotionEl
          key={i}
          as={Link}
          href={project.href}
          fade="in"
          trigger="onView"
          slideFrom="top"
          className="font-iransans hover:bg-m-background/50 relative flex w-full items-center gap-3 overflow-hidden rounded-xl p-3 text-sm outline-0 hover:backdrop-blur-3xl"
        >
          <HyperText2
            trigger="onViewOnce"
            className="text-m-text cursor-target inline-block font-bold"
            duration={250}
          >
            {project.title}
          </HyperText2>

          <HyperText2
            trigger="onViewOnce"
            className="text-m-text/70 inline-block font-light"
            duration={250}
            delay={250}
          >
            {project.description}
          </HyperText2>
          <div className="line-anim relative shrink grow basis-0" />
          <HyperText2
            trigger="onViewOnce"
            duration={2000}
            by="char"
            className="text-m-text block text-base"
          >
            {project.year}
          </HyperText2>
        </MotionEl>
      ))}
    </>
  );
}
