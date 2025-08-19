import React from "react";
import Projects from "./projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-m-light relative flex h-full w-full flex-col items-center justify-center gap-20 overflow-hidden rounded-4xl"
    >
      <h2 className="text-m-text-muted-sub absolute top-1/2 -left-48 -translate-y-1/2 rotate-90 text-4xl font-bold tracking-[2.5rem]">
        Projects
      </h2>
      <div className="bg-m-light mx-auto w-full max-w-4xl rounded-2xl md:p-2">
        <Projects />
      </div>
    </section>
  );
}
