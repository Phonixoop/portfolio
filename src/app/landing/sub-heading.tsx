import React from "react";
import StaggerPhraseAnim from "~/app/components/me/stagger-phrase-anim";
import { motion, type Variants } from "motion/react";

export default function SubHeading({ delay }: { delay?: number }) {
  return (
    <>
      <h2 className="text-m-foreground/40 font-iransans z-10 text-center text-sm font-light">
        {/* <StaggerPhraseAnim
          delay={delay}
          text="My Goal is to Solve Problems at the intersection of business and
              technology"
        /> */}
        <StaggerPhraseAnim
          delay={delay}
          className="flex max-w-2xs flex-wrap items-center justify-center"
          text="My goal is to puzzle out where Polish design meets innovative technology to create impactful solutions."
        />
      </h2>
    </>
  );
}
