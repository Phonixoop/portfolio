import { useInView, motion } from "motion/react";
import { useRef } from "react";
import { parentVariants, slideUpWithY } from "./anim";

export default function StaggerPhraseAnim({ text }: { text: string }) {
  const parent = useRef(null);
  const isInView = useInView(parent);
  return (
    <motion.div
      ref={parent}
      variants={parentVariants}
      animate={isInView ? "open" : "closed"}
    >
      {text.split(" ").map((word, index) => {
        return (
          <motion.div
            key={index}
            className={"relative inline-flex gap-2 overflow-hidden"}
          >
            <motion.span
              variants={slideUpWithY}
              custom={index}
              className="px-1"
              key={index}
            >
              {word}
            </motion.span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
