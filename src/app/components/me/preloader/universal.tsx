// components/Preloader.jsx
"use client";

import { useEffect, useState } from "react";

export default function UniversalPreloader({ children }: { children?: any }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      // Wait a bit for smooth transition (optional)
      setTimeout(() => setLoaded(true), 300);
    };

    if (document.readyState === "complete") {
      // Page already loaded
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <div
      className={`bg-m-background fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500`}
    >
      {children}
    </div>
  );
}
