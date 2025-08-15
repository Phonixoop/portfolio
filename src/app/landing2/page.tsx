"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "~/app/components/me/preloader";
import { cn } from "~/lib/utils";
import Preloader2 from "~/app/components/me/preloader/version2";
import LandingPageClient from "~/app/landing/page-client";
import HeroSection from "~/app/landing2/(sections)/hero";
import ProjectsSection from "~/app/landing2/(sections)/2";
import TopWidget from "~/app/landing/top-widget";

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
    <main className={cn(true ? "overflow-hidden" : "")}>
      <AnimatePresence mode="wait">
        {showPreloader && <Preloader2 />}
      </AnimatePresence>

      {/* Keep content hidden until preloader finishes */}
      <div
        className={
          showPreloader
            ? "overflow-hidden opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <TopWidget />
        <HeroSection startAnimation={!showPreloader} />
        <ProjectsSection />
        {/* <LeftPanel /> */}
      </div>
    </main>
  );
}

function LeftPanel() {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex h-screen flex-col items-center justify-center gap-4 px-5">
        {[1, 2, 3, 4, 5].map((a) => {
          return (
            <>
              <span
                key={a}
                className="bg-m-foreground text-m-background flex size-12 items-center justify-center rounded-full text-sm font-medium"
              >
                {a}
              </span>
            </>
          );
        })}
      </div>
    </>
  );
}
