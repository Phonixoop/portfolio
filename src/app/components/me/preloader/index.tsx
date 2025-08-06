"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import { opacity, slideUp } from "./anim";
import styles from "./style.module.css";

const helloPath =
  "M17.5 371.4C17.5 371.4 207.47 270.53 251.08 109.77C260.21 77.32 260.08 51.46 251.08 35.77C240.36 16.95 201.39 2.56002 175.53 67.71C147.71 137.82 123.31 444.95 131.42 390.19C139.53 335.43 165.42 213.95 231.31 207C268.97 203 280.86 230.58 284.14 254.92C286.108 270.078 285.089 285.474 281.14 300.24C273.97 327.52 260.67 397.91 314.65 397.1C381.58 396.1 446.56 343.21 474.2 312.61C505.3 276.44 505.3 241.97 493.47 222.36C476.73 192.44 424 189.36 400.68 239.09C373.86 296.16 409.78 382.22 470.08 394.39C530.38 406.56 613.78 376.47 704.38 206.1C734.24 147.94 757.23 91.39 750.52 56.02C743.08 16.81 690.78 1.52001 657.65 47.32C610.65 112.32 595.87 313.94 622.91 355.85C649.95 397.76 727.7 418.02 792.6 345.71C857.5 273.4 925.8 157.15 939.14 89.48C953.14 18.33 882.2 -5.15996 850.74 42.16C811.61 101.02 778.66 246.53 814.38 349.02C818.848 362.234 826.972 373.909 837.81 382.69C863.3 402.92 892.91 398.69 915.27 389.01C926.437 384.1 936.721 377.387 945.71 369.14C983.44 334.91 974.71 332.43 1010.29 241.61C1035.08 191.72 1096.08 177.39 1132.08 216.89C1138.01 223.488 1142.66 231.141 1145.77 239.45C1163.45 285.45 1152.58 319.45 1138.96 347.34C1126.96 371.96 1104.4 390.06 1077.51 395.25C1054.45 399.7 1029.14 394.9 1011.03 370.98C1005.27 363.228 1000.97 354.483 998.37 345.18C983.62 294.18 1002.51 256.42 1009.37 243.77C1015.55 232.38 1046.63 174.16 1112.79 201.53C1168.5 224.58 1213.45 178.22 1213.45 178.22";
export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  if (dimension.width <= 0) return;
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  // const initialPath = `M0 0H1080V1648.56C720 2010.48 360 2010.48 0 1648.56V0Z`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  console.log({ dimension });
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.height > 0 && (
        <>
          <svg className="curve">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-m-foreground"
            />
          </svg>
          <div className="z-10 flex h-auto w-screen items-center justify-center">
            {" "}
            <motion.svg viewBox="0 0 1250 600" className="w-md">
              <motion.path
                d={helloPath}
                className="fill-none stroke-[#A74D25] stroke-[25px]"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.1,
                  ease: [0.317, 0.803, 0.698, -0.024],
                }}
              />
            </motion.svg>
          </div>
        </>
      )}
    </motion.div>
  );
}
