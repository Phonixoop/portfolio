"use client";
import { MinusIcon, MoonIcon, SunIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "~/app/ui/buttons";
import { cn } from "~/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
export default function Header() {
  return (
    <header
    // className={cn(
    //   "from-m-dark/80 via-m-dark/50 fixed top-0 z-[60] flex h-12 w-full flex-col items-center justify-between bg-gradient-to-b to-transparent py-5 sm:w-full sm:p-0 md:max-w-full md:px-2",
    //   //  "bg-gradient-to-l from-secbuttn/50 via-transparent to-transparent",
    // )}
    >
      {/* <button
        className="text-m-text"
        onClick={() => {
          const classList = document.querySelector("html")?.classList;
          if (classList?.contains("dark"))
            document.querySelector("html")?.classList.remove("dark");
          else document.querySelector("html")?.classList.add("dark");
        }}
      >
        {" "}
        switch{" "}
      </button> */}
      <ThemeSwitch />
      <Link href={"/"}>home</Link>

      {/* <div
        className="absolute inset-0 -z-10"
        data-framer-name="Mask Pattern"
        style={{
          backgroundColor: "transparent",
          backgroundImage:
            "radial-gradient(transparent 1px, rgba(var(--color-back),0.4) 1px)",
          backgroundSize: "4px 4px",
          backdropFilter: "blur(3px)",
          maskImage: "linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)", // For Safari compatibility
          opacity: 1,
        }}
      /> */}
    </header>
  );
}

function ThemeSwitch({ className = "" }) {
  // const { theme, setTheme } = useTheme();
  // const [value, setValue] = useState(theme?.includes("dark") ? true : false);

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        <Button
          className={cn(
            "border-third size-10 rounded-full shadow-[0px_0px_20px_0px_rgba(var(--dikado-yellow-800),0.1)]",
            className,
          )}
          onClick={() => {
            if (resolvedTheme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          {resolvedTheme === "dark" ? (
            <MoonIcon className="fill-dikado-blue-default size-5" />
          ) : (
            <SunIcon className="stroke-dikado-yellow-default size-5" />
          )}
        </Button>
      ) : (
        <div className="bg-third flex size-10 animate-pulse items-center justify-center rounded-full">
          <MinusIcon className="stroke-primary size-5" />
        </div>
      )}
    </>
  );
}
