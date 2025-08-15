import React from "react";
import Projects from "./projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-m-dark flex h-screen w-full items-center justify-center"
    >
      <div className="bg-m-background min-w-5xl rounded-2xl p-2">
        <Projects />
      </div>
    </section>
  );
}
