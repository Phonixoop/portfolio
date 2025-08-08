"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

interface SvgMorphProps {
  initialPath: string;
  morphPath: string;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  duration?: number;
  repeat?: number; // -1 means infinite
  yoyo?: boolean;
  easing?: string;
  className?: string;
}

const SvgMorphGsap: React.FC<SvgMorphProps> = ({
  initialPath,
  morphPath,
  width = 1920,
  height = 1080,
  stroke = "white",
  className,
  strokeWidth = 2,
  duration = 3,
  repeat = 0,
  yoyo = false,
  easing = "power1.inOut",
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const animation = gsap.to(pathRef.current, {
      duration,
      morphSVG: morphPath,
      ease: easing,
      repeat,
      yoyo,
    });

    return () => {
      animation.kill();
    };
  }, [morphPath, duration, repeat, yoyo, easing]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <path
        ref={pathRef}
        fill="none"
        className={className}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d={initialPath}
      />
    </svg>
  );
};

export default SvgMorphGsap;
