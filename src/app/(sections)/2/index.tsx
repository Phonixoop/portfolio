import React from "react";
import Projects from "./projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-m-dark flex h-screen w-full items-center justify-center px-2"
    >
      <div className="bg-m-background mx-auto w-full max-w-4xl rounded-2xl md:p-2">
        <Projects />
      </div>
    </section>
  );
}
