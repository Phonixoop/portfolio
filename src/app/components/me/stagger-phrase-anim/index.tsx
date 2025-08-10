import { useInView, motion, stagger, type Variants } from "motion/react";
import { useRef } from "react";
import { parentVariants, slideUpWithY } from "./anim";

const defaultAnimation: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",

    transition: {
      duration: 0.5,
    },
  },
};

export default function StaggerPhraseAnim({ text }: { text: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      transition={{ delayChildren: stagger(0.05, { startDelay: 3 }) }}
    >
      {text.split(" ").map((word, index) => {
        return (
          <div
            key={index}
            className={"relative inline-flex gap-2 overflow-hidden"}
          >
            <motion.span
              variants={defaultAnimation}
              className="px-1"
              key={index}
            >
              {word}
            </motion.span>
          </div>
        );
      })}
    </motion.div>
  );
}
/* <motion.div
            key={index}
            className={"relative inline-flex gap-2 overflow-hidden"}
          >*/
