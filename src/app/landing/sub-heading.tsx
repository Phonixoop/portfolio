import React from "react";
import StaggerPhraseAnim from "~/app/components/me/stagger-phrase-anim";
import { motion, type Variants } from "motion/react";

export default function SubHeading() {
  return (
    <>
      <h2 className="text-m-foreground/40 font-iransans w-2xs text-center text-sm font-light">
        <StaggerPhraseAnim
          text="My Goal is to Solve Problems at the intersection of business and
              technology"
        />
      </h2>
    </>
  );
}
