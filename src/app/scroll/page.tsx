"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");

      // Horizontal scroll for first 2 sections
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          id: "horizontal",
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + window.innerWidth * (sections.length - 1),
        },
      });

      // 3D bend effect per panel
      sections.forEach((panel) => {
        gsap.fromTo(
          panel,
          { rotateY: 0, z: 0 },
          {
            rotateY: -15,
            z: -150,
            scrollTrigger: {
              trigger: panel,
              //     containerAnimation: ScrollTrigger.getById("horizontal"),
              start: "left center",
              end: "right center",
              scrub: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Horizontal scroll wrapper */}
      <motion.div
        ref={containerRef}
        className="horizontal-wrapper flex h-screen w-[200vw] [transform-style:preserve-3d] perspective-[1200px]"
      >
        <motion.section
          className="panel flex h-screen w-screen items-center justify-center bg-red-400 text-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Section 1
        </motion.section>

        <motion.section
          className="panel flex h-screen w-screen items-center justify-center bg-blue-400 text-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Section 2
        </motion.section>
      </motion.div>

      {/* Vertical scroll sections */}
      <motion.section
        className="flex h-screen w-screen items-center justify-center bg-green-400 text-5xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Section 3
      </motion.section>

      <motion.section
        className="flex h-screen w-screen items-center justify-center bg-yellow-400 text-5xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Section 4
      </motion.section>
    </main>
  );
}
