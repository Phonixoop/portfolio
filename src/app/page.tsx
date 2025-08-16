"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useTime } from "motion/react";
import Preloader2 from "~/app/components/me/preloader/version2";
import { cn } from "~/lib/utils";
import TopWidget from "~/app/landing/top-widget";
import HeroSection from "~/app/(sections)/hero";
import ProjectsSection from "~/app/(sections)/2";
import type LocomotiveScroll from "locomotive-scroll";
import MorseBlinker from "~/app/components/me/morse-code-blinker";

export default function LandingPage() {
  const [scrollReady, setScrollReady] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  const time = useTime(); // motion’s clock (ms since component mount)

  // Instead of useEffect, subscribe to time updates
  useMotionValueEvent(time, "change", (latest) => {
    if (latest >= 1700 && !minTimePassed) {
      setMinTimePassed(true);
    }
  });
  const locomotiveScrollRef = useRef<LocomotiveScroll>(null);
  // LocomotiveScroll load
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScrollRef.current = new LocomotiveScroll();

      document.body.style.cursor = "default";
      locomotiveScrollRef.current.scrollTo(0, { duration: 0, lerp: 0 });
      setScrollReady(true);
    })();
  }, []);

  // Window load event (assets)
  useEffect(() => {
    const handlePageLoad = () => setAssetsLoaded(true);

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  const showPreloader = !(scrollReady && assetsLoaded && minTimePassed);

  // Disable scrolling when preloader is visible
  useEffect(() => {
    if (showPreloader) {
      locomotiveScrollRef.current?.scrollTo(0, { duration: 0, lerp: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showPreloader]);

  return (
    <main className={cn(showPreloader ? "h-0 overflow-hidden" : "")}>
      <AnimatePresence mode="wait">
        {showPreloader && <Preloader2 />}
      </AnimatePresence>

      <div
        className={
          showPreloader
            ? "overflow-hidden opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <div className="fixed top-10 right-5 z-50">
          <MorseBlinker text="Please Hire Me" />
        </div>
        <TopWidget />
        <HeroSection startAnimation={!showPreloader} />
        <ProjectsSection />
      </div>
    </main>
  );
}
