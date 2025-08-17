"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface PuzzlePieceProps {
  piece: {
    id: number | string;
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    start: number;
    end: number;
  };
  scrollYProgress: MotionValue<number>;
  isFinal?: boolean;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({
  piece,
  scrollYProgress,
  isFinal,
}) => {
  const x = useTransform(
    scrollYProgress,
    [piece.start, piece.end],
    [piece.x0, piece.x1],
  );
  const y = useTransform(
    scrollYProgress,
    [piece.start, piece.end],
    [piece.y0, piece.y1],
  );
  const rotate = useTransform(
    scrollYProgress,
    [piece.start, piece.end],
    [30, 0],
  );

  if (isFinal) {
    return (
      <motion.svg
        style={{ position: "absolute", x, y }}
        width="100%"
        height="100"
      >
        <defs>
          <mask id="footerMask">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100"
              fill="black"
              style={{ y }}
            />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="white" mask="url(#footerMask)" />
      </motion.svg>
    );
  }

  return (
    <motion.div
      style={{
        position: "absolute",
        width: 100,
        height: 100,
        backgroundColor: "orange",
        borderRadius: 10,
        x,
        y,
        rotate,
      }}
    />
  );
};

export default function PuzzleFooter() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pieces = [
    { id: 1, x0: 100, y0: 100, x1: 0, y1: 0, start: 0, end: 0.2 },
    { id: 2, x0: 150, y0: 150, x1: 0, y1: 0, start: 0.2, end: 0.4 },
    { id: 3, x0: 300, y0: 300, x1: 0, y1: 0, start: 0.4, end: 0.6 },
    { id: 4, x0: 400, y0: 400, x1: 0, y1: 0, start: 0.6, end: 0.8 },
  ];

  const finalPiece = {
    id: "final",
    x0: 0,
    y0: 400,
    x1: 0,
    y1: 0,
    start: 0.8,
    end: 1,
  };

  return (
    <main
      ref={ref}
      className="grid h-screen grid-rows-[1fr_auto]"
      style={{ position: "relative" }}
    >
      {pieces.map((p) => (
        <PuzzlePiece key={p.id} piece={p} scrollYProgress={scrollYProgress} />
      ))}

      {/* <PuzzlePiece
        key={finalPiece.id}
        piece={finalPiece}
        scrollYProgress={scrollYProgress}
        isFinal
      /> */}
      <div className="h-screen"></div>
      <footer
        style={{
          height: "400px",
          background: "#222",
          color: "#fff",
          position: "relative",
          marginTop: "",
        }}
      >
        <h2>My Footer Content</h2>
      </footer>
    </main>
  );
}
