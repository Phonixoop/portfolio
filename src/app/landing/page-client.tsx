// AliLogoAnimation.tsx
"use client";
import { motion, useAnimation, type Variants } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SVGMorph from "~/app/components/me/svg-morph";
import { ali, hello, i, s, my, name } from "~/app/landing/paths";

const pathSign =
  "M1.87402 158.579C5.18891 155.264 7.7253 152.727 13.8151 146.361C19.0951 140.842 28.7447 130.603 34.6922 124.509C42.4132 116.598 47.8806 111.182 53.87 104.494C58.1567 99.707 64.8903 92.5069 73.6588 79.9881C78.2498 73.4337 82.1511 65.812 85.2526 58.793C91.0277 45.723 92.2799 31.6921 92.0037 19.8431C91.7795 10.2245 87.2741 6.52915 83.2268 3.16823C78.5446 -0.719878 68.8581 2.59482 62.8687 6.62542C55.483 11.5957 54.8954 16.2562 52.945 20.1612C48.6502 28.76 52.3674 39.6947 54.0458 43.7421C55.908 48.2327 60.4537 51.414 69.9087 56.5705C77.7379 60.8404 88.873 62.3046 98.6293 63.5602C104.485 64.3139 108.444 64.2634 115.103 64.6819C127.264 65.4463 140.22 63.9955 149.83 62.1874C162.718 59.7625 170.079 54.2434 175.834 50.4681C180.136 47.6462 182.669 43.3612 185.884 40.4188C189.341 37.2544 189.659 31.9098 189.939 29.8212C190.07 28.8464 189.667 28.0089 189.111 27.8582C187.718 27.4814 180.547 22.8065 175.834 32.5C171.983 40.4221 171.368 62.5808 167.685 72.0525C160.159 91.4069 160.921 101.874 162.307 108.336C162.965 111.407 166.773 111.978 169.686 112.396C179.505 113.807 183.506 110.596 186.306 110.299C192.501 109.642 182.418 122.55 179.488 129.393C175.906 137.76 175.989 149.873 177.931 155.079C179.568 159.467 187.122 157.741 196.582 155.804C209.36 153.186 218.112 149.371 219.924 149.785C226.396 151.265 222.297 169.695 225.361 174.609C227.562 178.138 233.171 178.108 240.935 178.388C246.761 178.599 256.434 178.116 284.066 172.035C311.698 165.953 357.002 154.075 381.169 147.956C406.896 141.442 410.358 141.284 413.974 140.447C418.143 140.162 421.525 139.886 424.718 139.468C426.807 139.325 429.846 139.325 432.976 139.325";
const pathRect = "M1919.5 0.5V1079.5H0.5V0.5H1919.5Z";
const helloPath =
  "M17.5 371.4C17.5 371.4 207.47 270.53 251.08 109.77C260.21 77.32 260.08 51.46 251.08 35.77C240.36 16.95 201.39 2.56002 175.53 67.71C147.71 137.82 123.31 444.95 131.42 390.19C139.53 335.43 165.42 213.95 231.31 207C268.97 203 280.86 230.58 284.14 254.92C286.108 270.078 285.089 285.474 281.14 300.24C273.97 327.52 260.67 397.91 314.65 397.1C381.58 396.1 446.56 343.21 474.2 312.61C505.3 276.44 505.3 241.97 493.47 222.36C476.73 192.44 424 189.36 400.68 239.09C373.86 296.16 409.78 382.22 470.08 394.39C530.38 406.56 613.78 376.47 704.38 206.1C734.24 147.94 757.23 91.39 750.52 56.02C743.08 16.81 690.78 1.52001 657.65 47.32C610.65 112.32 595.87 313.94 622.91 355.85C649.95 397.76 727.7 418.02 792.6 345.71C857.5 273.4 925.8 157.15 939.14 89.48C953.14 18.33 882.2 -5.15996 850.74 42.16C811.61 101.02 778.66 246.53 814.38 349.02C818.848 362.234 826.972 373.909 837.81 382.69C863.3 402.92 892.91 398.69 915.27 389.01C926.437 384.1 936.721 377.387 945.71 369.14C983.44 334.91 974.71 332.43 1010.29 241.61C1035.08 191.72 1096.08 177.39 1132.08 216.89C1138.01 223.488 1142.66 231.141 1145.77 239.45C1163.45 285.45 1152.58 319.45 1138.96 347.34C1126.96 371.96 1104.4 390.06 1077.51 395.25C1054.45 399.7 1029.14 394.9 1011.03 370.98C1005.27 363.228 1000.97 354.483 998.37 345.18C983.62 294.18 1002.51 256.42 1009.37 243.77C1015.55 232.38 1046.63 174.16 1112.79 201.53C1168.5 224.58 1213.45 178.22 1213.45 178.22";
const varianets: Variants = {
  draw: {
    pathLength: 0,

    transition: {
      duration: 1.5,
      ease: [0.317, 0.803, 0.698, -0.024],
    },
  },
  scaleUp: {
    width: "1000%",
    height: "1000%",

    transition: {
      delay: 0.6,
      duration: 1.5,
      ease: [0.317, 0.803, 0.698, -0.024],
    },
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 1.4, // delay between word groups
    },
  },
};

const wordGroupVariants: Variants = {
  initial: { opacity: 0, scale: 1, y: 40 },
  animate: (i: number) => ({
    opacity: 1,
    y: 200,
    scale: 1,

    transition: {
      delay: i * 1.4,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
  exit: (i: number) => ({
    opacity: 0.5,
    scale: 0.8,
    y: -40,
    transition: {
      delay: i * 1.4 + 1.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const pathVariants: Variants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: [0.42, 0, 0.58, 1], // replaces "easeInOut"
    },
  },
};
export const slideUp: Variants = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 2 },
  },
};
export default function LandingPageClient() {
  const controls = useAnimation();
  const dotControls = useAnimation();
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    async function sequence() {
      await controls.start("draw");
      await controls.start("scaleUp");

      controls.start("expandSquare");
    }

    sequence();
  }, []);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="bg-m-background inset-0 flex flex-col items-center justify-center overflow-hidden"
    >
      <Image
        src={"/bg.png"}
        width={1700}
        height={1080}
        className="h-screen object-cover"
        quality={100}
        alt="bg image"
      />
      <Image
        src={"/bg.png"}
        width={1920}
        height={1080}
        className="h-screen"
        quality={100}
        alt="bg image"
      />
    </motion.div>
  );
}
