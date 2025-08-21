import AnimatedText from "~/app/components/me/animation/split-text";
import Projects from "./projects";
import { motion } from "motion/react";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-m-background relative flex h-full w-full flex-col items-center justify-center gap-20 overflow-hidden rounded-4xl"
    >
      <h2 className="text-m-text absolute top-1/2 -left-48 hidden -translate-y-1/2 rotate-90 text-4xl font-bold tracking-[2.5rem] md:visible">
        Projects
      </h2>
      <AnimatedText gap={30} className="text-4xl" text="Projects" />
      <motion.div
        // initial={{
        //   y: 100,
        // }}
        // whileInView={{
        //   y: 0,
        // }}
        // transition={{
        //   duration: 2,
        // }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-2 rounded-2xl md:p-2"
      >
        <Projects />
      </motion.div>
    </section>
  );
}
