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
      const scroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        scroll.scrollTo(0, { duration: 0, lerp: 0 });
      }, 1700);
    })();
  }, []);

  return (
    <main className="h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingPageClient startAnimation={true} />
    </main>
  );
}
