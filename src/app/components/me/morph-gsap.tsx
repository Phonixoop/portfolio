"use client";
import { useEffect, useRef, useState } from "react";
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
  svgClassName?: string;
}

const SvgMorphGsap: React.FC<SvgMorphProps> = ({
  initialPath,
  morphPath,
  width = 1920,
  height = 1080,
  stroke = "white",
  className,
  svgClassName,
  strokeWidth = 25,
  duration = 3,
  repeat = 0,
  yoyo = false,
  easing = "power1.inOut",
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [preserveAspectRatio, setPreserveAspectRatio] =
    useState("xMidYMid meet");

  useEffect(() => {
    if (!pathRef.current) return;

    const animation = gsap.to(pathRef.current, {
      duration,
      morphSVG: morphPath,
      ease: easing,
      repeat,
      yoyo,
      onComplete: () => {
        // Only set preserveAspectRatio to 'none' if repeat is 0 (animation ends)
        if (repeat === 0) {
          //  setPreserveAspectRatio("none");
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [morphPath, duration, repeat, yoyo, easing]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={svgClassName}
      preserveAspectRatio="none"
    >
      <linearGradient
        id="paint0_linear_382_287"
        x1="3"
        y1="4"
        x2="1786.5"
        y2="4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0" />
        <stop offset="0.5" className="[stop-color:var(--color-m-text)]" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <path
        stroke="url(#paint0_linear_382_287)"
        ref={pathRef}
        vectorEffect={"none-scalling-stroke"}
        className={className}
        d={initialPath}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SvgMorphGsap;
