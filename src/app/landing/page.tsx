"use client";
import React, { useEffect, useState } from "react";
import LandingPageClient from "./page-client";
import { AnimatePresence } from "motion/react";
import Preloader from "~/app/components/me/preloader";
export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 1700);
    })();
  }, []);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  if (dimension.width <= 0) return;
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  return (
    <>
      {/* <span className="z-40 flex items-center justify-center bg-red-500 p-5 text-white">
        {JSON.stringify(dimension)} asdsad
      </span>
      {initialPath}
      <svg
        width={1080}
        height={1920}
        style={{ height: "calc(100%)" }}
        className="top-0 z-0 w-full"
      >
        <path d={initialPath} className="fill-red-400" />
      </svg> */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingPageClient />
    </>
  );
}
