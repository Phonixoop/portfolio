"use client";

import React, {
  type MouseEvent,
  type FunctionComponent,
  type ComponentProps,
  useState,
  type JSX,
} from "react";

import { twMerge } from "tailwind-merge";

import { cn } from "~/lib/utils";
import { motion, type MotionProps } from "motion/react";
import SpinnerLoading from "~/app/ui/loadings/spinner";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  cooldownDuration?: number; // New cooldown prop (milliseconds)
  className?: string;
  initialTranslateY?: number;
  translateY?: number;
  loadingClassName?: string;
  loadingShape?: "Three-dots-wave" | "spinner";
  style?: React.CSSProperties;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

export default function Button({
  children = <></>,
  type = "button",
  loadingShape = "spinner",
  disabled = false,
  isLoading = false,
  cooldownDuration = 0, // Default: no cooldown
  className = "",
  initialTranslateY = 0,
  translateY = 0,
  onClick = (e) => {},
  style,
  loadingClassName = "bg-accent",
  ...rest
}: ButtonProps): JSX.Element {
  const [isCooldown, setIsCooldown] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isCooldown) return; // Prevent clicks during cooldown

    onClick?.(e);

    if (cooldownDuration > 0) {
      setIsCooldown(true);
      setTimeout(() => setIsCooldown(false), cooldownDuration);
    }
  };

  const isDisabled = disabled || isLoading || isCooldown;
  const enabledClass = `hover:bg-opacity-95 cursor-pointer`;
  const busyClass = `bg-gray-200 text-gray-500 cursor-not-allowed`;

  return (
    <motion.button
      whileTap={{
        scale: isDisabled ? 1 : 0.95,
        transition: { duration: 0 },
      }}
      initial={{ y: initialTranslateY }}
      animate={{ y: translateY }}
      transition={{ duration: 0.2, ease: "linear" }}
      disabled={isDisabled}
      dir="rtl"
      type={type}
      onClick={handleClick}
      style={style}
      className={cn(
        "text-m-text relative flex items-center justify-center overflow-visible rounded-lg p-2 duration-400 select-none",
        "gap-2 transition-all disabled:border-none disabled:bg-gray-400 disabled:text-gray-600",
        className,
        !isDisabled ? enabledClass : busyClass,
        isLoading ? "bg-opacity-10" : "",
      )}
      {...rest}
    >
      {loadingShape === "spinner" && isLoading && (
        <SpinnerLoading className="size-6" />
      )}
      {children}
      {/* {loadingShape === "Three-dots-wave" && (
        <div
          dir="rtl"
          className="absolute top-7 flex h-fit w-fit items-center justify-start"
        >
          {isLoading && <ThreeDotsWave className={loadingClassName} />}
        </div>
      )} */}
    </motion.button>
  );
}
