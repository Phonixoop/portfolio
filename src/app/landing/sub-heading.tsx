import React from "react";
import StaggerPhraseAnim from "~/app/components/me/stagger-phrase-anim";
import { motion } from "motion/react";
export default function SubHeading() {
  return (
    <>
      <motion.h2 className="text-m-foreground/40 font-iransans w-2xs text-center text-sm font-light">
        <StaggerPhraseAnim
          text="My Goal is to Solve Problems at the intersection of business and
              technology"
        />
      </motion.h2>
    </>
  );
}
