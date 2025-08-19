"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";
import SvgMorphGsap from "~/app/components/me/morph-gsap";
import { slideUp, slideUpV2 } from "./anim";

const helloPath2 =
  "M67 825.373C67 825.373 350.834 650.262 415.992 371.181C429.633 314.848 429.439 269.955 415.992 242.717C399.975 210.045 341.75 185.064 303.113 298.165C261.547 419.876 225.091 953.056 237.208 857.992C249.325 762.928 288.007 552.038 386.454 539.973C442.722 533.029 460.486 580.908 465.387 623.163C468.328 649.476 466.805 676.205 460.905 701.838C450.192 749.197 430.321 871.394 510.972 869.988C610.972 868.252 708.059 776.435 749.356 723.313C795.822 660.521 795.822 600.681 778.147 566.638C753.136 514.697 674.352 509.35 639.51 595.682C599.438 694.756 653.106 844.156 743.2 865.283C833.294 886.411 957.903 834.174 1093.27 538.411C1137.88 437.445 1172.23 339.274 1162.21 277.871C1151.09 209.802 1072.95 183.259 1023.45 262.768C953.226 375.608 931.143 725.622 971.544 798.378C1011.94 871.134 1128.11 906.305 1225.08 780.775C1322.04 655.244 1424.09 453.433 1444.02 335.958C1464.94 212.441 1358.95 171.662 1311.94 253.81C1253.48 355.991 1204.25 608.598 1257.62 786.521C1264.29 809.46 1276.43 829.728 1292.63 844.972C1330.71 880.092 1374.95 872.748 1408.36 855.944C1425.04 847.421 1440.41 835.767 1453.84 821.449C1510.21 762.026 1497.17 757.72 1550.33 600.056C1587.37 513.447 1678.51 488.57 1732.29 557.142C1741.16 568.597 1748.1 581.881 1752.75 596.307C1779.16 676.163 1762.92 735.187 1742.57 783.604C1724.65 826.345 1690.94 857.767 1650.76 866.776C1616.31 874.502 1578.49 866.169 1551.43 824.643C1542.82 811.186 1536.41 796.004 1532.52 779.855C1510.48 691.318 1538.7 625.767 1548.95 603.806C1558.19 584.033 1604.62 482.963 1703.47 530.477C1786.71 570.492 1853.87 490.011 1853.87 490.011";

const newHello =
  "M3 520.605C3 520.605 277.397 286.888 358.542 190.378C395.555 142.318 458.478 38.2897 414.062 6.66235C358.542 -32.8719 337.188 378.745 347.865 520.605C358.542 662.466 355.496 1036.98 315.834 1029.9C250.705 1018.27 236.825 803.16 356.406 500.84C382.387 443.476 450.577 334.796 515.492 358.982C596.637 389.214 588.095 585.722 576.351 708.976C572.08 735.72 560.335 788.509 547.523 785.719C531.508 782.23 535.778 728.743 568.877 697.348C601.975 665.953 663.902 626.419 676.714 621.768C689.526 617.117 794.16 548.513 806.972 527.583C819.785 506.654 830.462 469.445 782.415 462.468C734.369 455.492 680.985 446.189 669.24 603.164C659.844 728.743 705.897 741.534 730.099 732.231C757.503 724.867 826.831 677.116 884.914 545.025C957.517 379.911 1013.04 270.611 985.277 249.681C943.637 218.286 871.034 405.492 877.44 527.583C871.746 597.737 874.45 743.859 930.825 767.114C987.199 790.37 1065.35 558.978 1097.38 440.376C1113.04 385.338 1140.09 272.704 1123.01 262.471C1105.93 252.239 1079.59 314.021 1068.56 346.191C1051.83 397.741 1019.66 523.165 1024.78 612.466C1023 653.55 1027.98 738.278 1062.15 748.51C1096.32 758.743 1138.31 702.387 1155.04 672.93C1182.8 625.256 1230.63 525.025 1199.88 505.491C1188.85 506.266 1164.86 520.374 1157.18 570.606C1149.49 620.838 1159.67 661.302 1165.72 675.255C1178.89 705.1 1220.17 760.835 1279.96 745.022C1339.75 729.208 1362.53 668.666 1366.44 640.372C1373.21 605.877 1375.41 525.723 1330.14 481.073C1284.87 436.422 1236.54 464.794 1218.03 484.561C1215.19 487.662 1212.91 493.863 1226.58 493.863C1243.66 493.863 1505.7 534.56 1786.5 505.491";

const hello2 =
  "M2393.15 533.61C2380.62 543.703 2364.65 543.575 2350.22 547.025C2298.34 559.163 2246.47 570.917 2194.09 580.628C2127.39 593.021 2059.8 596.215 1992.09 592.638C1957.33 590.849 1922.71 587.016 1887.96 583.566C1840.43 578.839 1793.15 570.662 1745.5 565.935C1718.54 563.251 1691.58 560.568 1664.49 558.907C1626.67 556.608 1589.11 553.03 1551.16 553.413C1493.8 554.052 1437.07 559.802 1381.23 573.217C1343.42 582.289 1305.21 590.594 1266.37 592.51C1246.18 593.532 1224.72 592.254 1209.9 574.623C1199.68 562.485 1201.59 550.73 1215.14 538.976C1229.83 551.369 1224.08 566.19 1220.63 580.755C1211.3 600.559 1198.02 626.496 1180.64 640.167C1156.62 659.076 1138.86 660.993 1119.57 632.756C1113.18 621.513 1114.46 601.07 1115.48 589.699C1117.78 563.379 1127.23 539.615 1148.83 522.622C1155.34 517.511 1164.16 517.128 1171.57 519.811C1179.11 522.622 1181.15 530.16 1180.77 537.826C1180.39 546.642 1180 555.713 1176.17 563.763C1157.39 602.476 1129.41 630.84 1087.5 644.894C1053.9 656.01 1035.5 634.034 1032.05 611.164C1029.36 594.299 1028.6 577.817 1032.05 560.824C1038.31 530.415 1044.31 499.751 1066.03 475.604C1073.06 467.682 1079.7 454.65 1093.25 462.188C1105.9 469.343 1097.34 483.27 1099.51 493.874C1099.64 494.257 1098.23 494.769 1098.1 495.407C1086.48 536.037 1061.69 576.411 1029.24 603.753C1016.46 608.736 1006.37 618.958 992.568 622.152C980.302 624.963 968.803 625.346 958.838 616.019M505.777 584.205C542.446 561.59 581.543 553.03 623.578 566.062C641.721 571.684 659.992 577.434 678.773 577.689C748.917 578.583 803.474 530.926 817.528 466.532C820.722 452.094 820.466 435.229 805.134 425.902C788.78 429.352 781.114 441.107 775.237 454.394C765.782 475.731 760.927 498.602 756.966 521.472C754.922 532.971 745.467 553.413 747.64 565.551C751.473 593.021 737.546 617.297 733.841 643.361C740.868 643.361 756.839 581.65 759.905 577.689C766.932 568.49 774.726 560.568 785.97 556.352C798.235 551.752 808.456 557.374 808.84 570.151C808.967 577.178 809.095 584.205 807.69 591.488C804.879 606.564 796.191 621.002 800.79 637.612C809.479 640.422 816.761 637.356 824.299 634.29C837.204 628.923 852.025 613.719 863.907 606.82C876.173 597.11 887.161 586.249 896.104 573.345C903.004 563.379 905.431 552.902 902.876 541.276C887.161 540.509 873.234 551.241 866.974 568.745C861.991 582.544 859.563 596.854 860.968 611.419C862.502 629.307 878.217 637.484 896.104 633.012C917.825 627.518 931.751 612.186 946.572 597.621M958.838 616.019C945.422 603.37 945.678 596.982 957.177 582.416C982.858 549.964 999.979 513.295 1007.52 472.665C1009.31 463.21 1009.82 452.606 997.168 447.367C975.958 457.716 967.398 479.564 959.221 500.39C950.661 522.111 945.294 545.109 945.039 568.873C945.039 575.773 953.216 610.397 958.838 616.019Z";

// Breakpoint-based padding map
// const paddingMap = {
//   sm: 2,
//   md: 5,
//   lg: 10,
//   xl: 20,
// };
const paddingMap = {
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};

function getResponsivePadding(width: number) {
  if (width >= 1280) return paddingMap.xl;
  if (width >= 1024) return paddingMap.lg;
  if (width >= 768) return paddingMap.md;
  return paddingMap.sm;
}

export default function Preloader2() {
  const [dimension, setDimension] = useState({ width: 1920, height: 1080 });
  const [showMorph, setShowMorph] = useState(false);

  //   useEffect(() => {
  //     function updateSize() {
  //       setDimension({ width: window.innerWidth, height: window.innerHeight });
  //     }
  //     updateSize();
  //     window.addEventListener("resize", updateSize);
  //     return () => window.removeEventListener("resize", updateSize);
  //   }, []);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    setTimeout(() => {
      setShowMorph(true);
    }, 2000);
  }, []);

  if (dimension.width <= 0 || dimension.height <= 0) return null;

  const strokeWidth = 15;
  const padding = getResponsivePadding(dimension.width) + strokeWidth;

  const paddedRectPath = `
  M${dimension.width - padding} ${padding}
  H${padding}
  V${dimension.height - padding}
  H${dimension.width - padding}
  V${padding}
  Z
`;
  const reactPath = `
  M${dimension.width - padding},${padding}
  L${padding},${padding}
  L${padding},${dimension.height - padding}
  L${dimension.width},${dimension.height - padding}
  L${dimension.width},${dimension.height}
  L${dimension.width - padding},${dimension.height}
  Z`;

  const line = `M 0 ${dimension.height / 2} L 1920 ${dimension.height / 2}`;

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
      transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.6 },
    },
  };

  return (
    <>
      <motion.div
        variants={slideUpV2}
        initial="initial"
        exit="exit"
        className={
          "bg-m-background fixed z-[99] flex h-dvh w-screen items-end justify-center"
        }
      >
        {dimension.height > 0 && (
          <>
            {/* <svg
              className="absolute top-0 w-full"
              style={{ height: "calc(100% + 300px)" }}
            >
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
                className="fill-m-dark"
              />
            </svg> */}

            <div className="absolute z-10 flex h-[300px] translate-y-[165px] flex-col items-center justify-center">
              {!showMorph ? (
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
                    <stop offset="0" stopOpacity="0" />
                    <stop
                      offset="5%"
                      stopOpacity="0"
                      className="[stop-color:var(--color-m-light)]"
                    />
                    <stop
                      offset="0.3"
                      className="[stop-color:var(--color-m-text)]"
                    />{" "}
                    <stop
                      offset="0.5"
                      className="[stop-color:var(--color-m-text)]"
                    />{" "}
                    <stop
                      offset="0.7"
                      className="[stop-color:var(--color-m-text)]"
                    />{" "}
                    <stop
                      offset="95%"
                      stopOpacity="0"
                      className="[stop-color:var(--color-m-light)]"
                    />
                    <stop offset="1" stopOpacity="0" />
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
              ) : (
                <SvgMorphGsap
                  initialPath={helloPath2}
                  morphPath={line}
                  width={1920}
                  height={1080}
                  svgClassName="h-auto w-screen md:w-lg"
                  className="fill-none stroke-[5px]"
                  duration={0.3}
                  repeat={0}
                  yoyo={false}
                />
              )}{" "}
            </div>
          </>
        )}
      </motion.div>

      {/* <div className="bg-m-text absolute top-1/2 left-1/2 w-screen -translate-1/2 rounded-full border border-black"></div> */}
    </>
  );
}
