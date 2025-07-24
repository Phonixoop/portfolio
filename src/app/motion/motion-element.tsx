"use client";

import { motion, type MotionProps, type Variants } from "motion/react";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";

// Animation options
type FadeOption = "in" | "out";
type SlideDirection = "top" | "bottom" | "left" | "right";

type MotionElProps<T extends ElementType> = {
  as?: T;
  fade?: FadeOption;
  blur?: boolean;
  slideFrom?: SlideDirection;
  duration?: number;
  distance?: number;
} & MotionProps &
  Omit<ComponentPropsWithoutRef<T>, keyof MotionProps | "as" | "ref">;

// Build dynamic animation variants
const buildVariants = ({
  fade,
  blur,
  slideFrom,
  duration = 0.5,
  distance = 5,
}: {
  fade?: FadeOption;
  blur?: boolean;
  slideFrom?: SlideDirection;
  duration: number;
  distance: number;
}): Variants => {
  const hidden: any = {};
  const visible: any = { transition: { duration } };

  // Fade logic
  if (fade === "in") {
    hidden.opacity = 0;
    visible.opacity = 1;
  } else if (fade === "out") {
    hidden.opacity = 1;
    visible.opacity = 0;
  }

  // Blur logic
  if (blur) {
    hidden.filter = "blur(10px)";
    visible.filter = "blur(0px)";
  }

  // Slide logic
  if (slideFrom) {
    const axis = slideFrom === "left" || slideFrom === "right" ? "x" : "y";
    const offset =
      slideFrom === "top" || slideFrom === "left" ? -distance : distance;
    hidden[axis] = offset;
    visible[axis] = 0;
  }

  return { hidden, visible };
};

// MotionEl component
export const MotionEl = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      fade,
      blur,
      slideFrom,
      duration = 0.5,
      distance = 5,
      ...props
    }: MotionElProps<T>,
    ref: ForwardedRef<any>,
  ): ReactElement => {
    const MotionComponent = motion(as || "div");
    const variants = buildVariants({
      fade,
      blur,
      slideFrom,
      duration,
      distance,
    });

    return <MotionComponent ref={ref} variants={variants} {...props} />;
  },
) as <T extends ElementType = "div">(
  props: MotionElProps<T> & { ref?: ForwardedRef<any> },
) => ReactElement;
