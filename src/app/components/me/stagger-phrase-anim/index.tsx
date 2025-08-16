import { useInView, motion, stagger, type Variants, delay } from "motion/react";
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

export default function StaggerPhraseAnim({
  text,
  delay = 3,
  className = "",
}: {
  className?: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      transition={{ delayChildren: stagger(0.05, { startDelay: delay }) }}
      className={className}
    >
      {text.split(" ").map((word, index) => {
        return (
          <span
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
          </span>
        );
      })}
    </motion.div>
  );
}
/* <motion.div
            key={index}
            className={"relative inline-flex gap-2 overflow-hidden"}
          >*/
