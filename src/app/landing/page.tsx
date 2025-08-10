"use client";
import React, { useEffect, useState } from "react";
import LandingPageClient from "./page-client";
import { AnimatePresence } from "motion/react";
import Preloader from "~/app/components/me/preloader";
import { cn } from "~/lib/utils";

export default function LandingPage() {
  const [scrollReady, setScrollReady] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  // Minimum animation time
  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), 1700); // 1.7s
    return () => clearTimeout(timer);
  }, []);

  // LocomotiveScroll load
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
      document.body.style.cursor = "default";
      scroll.scrollTo(0, { duration: 0, lerp: 0 });
      setScrollReady(true);
    })();
  }, []);

  // Window load event (assets)
  useEffect(() => {
    const handlePageLoad = () => {
      setAssetsLoaded(true);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  // Show preloader until ALL conditions are met
  const showPreloader = !(scrollReady && assetsLoaded && minTimePassed);

  return (
    <main className={cn(showPreloader ? "overflow-hidden" : "")}>
      <AnimatePresence mode="wait">
        {showPreloader && <Preloader />}
      </AnimatePresence>

      {/* Keep content hidden until preloader finishes */}
      <div
        className={
          showPreloader
            ? "overflow-hidden opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <LandingPageClient startAnimation={!showPreloader} />
      </div>
    </main>
  );
}
