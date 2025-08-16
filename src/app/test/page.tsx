"use client";

import React from "react";
import SubHeading from "~/app/landing/sub-heading";
import { motion, stagger, type Variants } from "motion/react";
import DividerProgress from "~/app/components/me/divider-progress";
import AnimatedHeading from "~/app/landing/heading";

const defaultAnimation: Variants = {
  hidden: { left: "50%", x: "-50%" },
  animate: {
    left: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const helloPath2 =
  "M67 825.373C67 825.373 350.834 650.262 415.992 371.181C429.633 314.848 429.439 269.955 415.992 242.717C399.975 210.045 341.75 185.064 303.113 298.165C261.547 419.876 225.091 953.056 237.208 857.992C249.325 762.928 288.007 552.038 386.454 539.973C442.722 533.029 460.486 580.908 465.387 623.163C468.328 649.476 466.805 676.205 460.905 701.838C450.192 749.197 430.321 871.394 510.972 869.988C610.972 868.252 708.059 776.435 749.356 723.313C795.822 660.521 795.822 600.681 778.147 566.638C753.136 514.697 674.352 509.35 639.51 595.682C599.438 694.756 653.106 844.156 743.2 865.283C833.294 886.411 957.903 834.174 1093.27 538.411C1137.88 437.445 1172.23 339.274 1162.21 277.871C1151.09 209.802 1072.95 183.259 1023.45 262.768C953.226 375.608 931.143 725.622 971.544 798.378C1011.94 871.134 1128.11 906.305 1225.08 780.775C1322.04 655.244 1424.09 453.433 1444.02 335.958C1464.94 212.441 1358.95 171.662 1311.94 253.81C1253.48 355.991 1204.25 608.598 1257.62 786.521C1264.29 809.46 1276.43 829.728 1292.63 844.972C1330.71 880.092 1374.95 872.748 1408.36 855.944C1425.04 847.421 1440.41 835.767 1453.84 821.449C1510.21 762.026 1497.17 757.72 1550.33 600.056C1587.37 513.447 1678.51 488.57 1732.29 557.142C1741.16 568.597 1748.1 581.881 1752.75 596.307C1779.16 676.163 1762.92 735.187 1742.57 783.604C1724.65 826.345 1690.94 857.767 1650.76 866.776C1616.31 874.502 1578.49 866.169 1551.43 824.643C1542.82 811.186 1536.41 796.004 1532.52 779.855C1510.48 691.318 1538.7 625.767 1548.95 603.806C1558.19 584.033 1604.62 482.963 1703.47 530.477C1786.71 570.492 1853.87 490.011 1853.87 490.011";
export default function PageTest() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-5">
        <AnimatedHeading delay={0} />
        <motion.svg
          viewBox={`0 0 1920 1080`}
          className="h-auto w-screen md:w-lg"
        >
          <linearGradient
            id="paint0_linear_382_287"
            x1="3"
            y1="4"
            x2="1786.5"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              stopOpacity="0"
              className="[stop-color:var(--color-m-primary)]"
            />
            <stop offset="0.3" className="[stop-color:var(--color-m-text)]" />{" "}
            <stop offset="0.5" className="[stop-color:var(--color-m-text)]" />{" "}
            <stop offset="0.7" className="[stop-color:var(--color-m-text)]" />{" "}
            <stop
              offset="1"
              stopOpacity="0"
              className="[stop-color:var(--color-m-primary)]"
            />
          </linearGradient>
          <motion.path
            stroke="url(#paint0_linear_382_287)"
            vectorEffect={"none-scalling-stroke"}
            className="fill-none stroke-[15px]"
            d={helloPath2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            strokeLinejoin="round" // rounds the joins where two lines meet
            strokeLinecap="round" // rounds the ends of open lines
            transition={{
              duration: 1.1,
              ease: [0.317, 0.803, 0.698, -0.024],
            }}
          />
        </motion.svg>

        <SubHeading />
        <motion.div
          initial="hidden"
          animate="animate"
          transition={{ delayChildren: stagger(0.05) }}
          className="bg-m-dark relative h-11 w-[130px] rounded-full"
        >
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <motion.span
                key={i}
                variants={defaultAnimation}
                className="bg-m-secondary absolute top-1/2 left-0 size-4 -translate-y-1/2 rounded-full"
              />
            );
          })}
        </motion.div>
        <div className="fixed top-5">
          {" "}
          {/* <DividerProgress length={4} />{" "} */}
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}
