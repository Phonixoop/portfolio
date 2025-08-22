"use client";

import DividerProgress from "~/app/components/me/divider-progress";
import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import { HomeIcon } from "lucide-react";

const variants: Variants = {
  closed: {
    width: 130,
    height: 43,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    width: "auto",
    height: 50,

    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const menuItems = [
  { text: "Projects", link: "/#projects", isIcon: false },
  { text: "Skills", link: "/#skills", isIcon: false },
];

export default function TopWidget() {
  const [isScrollOpen, setIsScrollOpen] = useState(true); // based on scroll
  const [isHovering, setIsHovering] = useState(false); // based on hover
  const scrollThreshold = 200; // px before closing

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrollOpen(false);
      } else {
        setIsScrollOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Final open state = either hover OR scroll-open
  const isOpen = isHovering || isScrollOpen;

  return (
    <motion.div className="fixed top-[20px] z-50 flex w-full items-center justify-center">
      <motion.div
        variants={variants}
        initial="initial"
        animate={false ? "open" : "closed"}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        onClick={() => setIsHovering(true)}
        style={{ transformOrigin: "center" }}
        className="bg-m-dark/80 relative flex w-full items-center justify-center gap-14 overflow-hidden rounded-3xl backdrop-blur-xl"
      >
        <nav className="flex h-full w-full items-start justify-center">
          <DividerProgress hovered={false} items={menuItems} />
        </nav>
      </motion.div>
    </motion.div>
  );
}
