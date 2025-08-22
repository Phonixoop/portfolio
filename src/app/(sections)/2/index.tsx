import AnimatedText from "~/app/components/me/animation/split-text";
import Projects from "./projects";
import { motion } from "motion/react";
import { Fade } from "~/app/components/me/animation/fade";
import { AudioWave } from "~/app/ui/svgs/audio-wave";
import AudioWaveContainer from "~/app/(sections)/2/audio-wave-container";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-m-background relative flex h-screen w-full flex-col items-center justify-center gap-20 overflow-hidden rounded-4xl p-2 md:p-0"
    >
      {/* <h2 className="text-m-text absolute top-1/2 -left-48 hidden -translate-y-1/2 rotate-90 text-4xl font-bold tracking-[2.5rem] md:visible">
        Projects
      </h2> */}

      <AudioWaveContainer className="w-2xl" />

      {/* <AnimatedText
        gap={30}
        className="text-m-text flex items-center justify-center text-3xl md:text-4xl"
        text="Projects"
      />
      <motion.div className="mx-auto flex w-full max-w-5xl flex-col gap-2 rounded-2xl md:p-2">
        <Projects />
      </motion.div> */}
    </section>
  );
}
