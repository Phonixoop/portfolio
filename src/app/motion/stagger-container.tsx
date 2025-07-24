"use client";

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

import { motion, type MotionProps } from "motion/react";

export default function StaggerContainer({
  children,
  className,
}: {
  children: any;
  className: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 2,
            staggerChildren: 0.25,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
// const childVariants = {
//   hidden: { opacity: 0, translateY: -5 },
//   visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
// };
// type MotionDivProps<T extends ElementType> = {
//   as?: T;
// } & MotionProps &
//   Omit<ComponentPropsWithoutRef<T>, keyof MotionProps | "as">;

// export const MotionEl = forwardRef(
//   <T extends ElementType = "div">(
//     { as, ...props }: MotionDivProps<T>,
//     ref: ForwardedRef<any>,
//   ): ReactElement => {
//     const MotionComponent = motion(as || "div");
//     return <MotionComponent variants={childVariants} ref={ref} {...props} />;
//   },
// ) as <T extends ElementType = "div">(
//   props: MotionDivProps<T> & { ref?: ForwardedRef<any> },
// ) => ReactElement;
