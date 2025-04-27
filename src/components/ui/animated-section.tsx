"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "tween" | "spring" | "inView";
  duration?: number;
  once?: boolean;
  amount?: number;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  type = "tween",
  duration = 0.5,
  once = true,
  amount = 0.3,
}: AnimatedSectionProps) {
  // Define animation values based on direction
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40 };
      case "down":
        return { y: -40 };
      case "left":
        return { x: 40 };
      case "right":
        return { x: -40 };
      default:
        return { y: 40 };
    }
  };

  // Variants for regular animation
  const regularVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: type === "spring" ? "spring" : "tween",
        stiffness: type === "spring" ? 60 : undefined,
        damping: type === "spring" ? 20 : undefined,
        duration: duration,
        delay: delay,
      },
    },
  };

  // Variants for viewport-based animation (inView)
  const inViewVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: type === "spring" ? "spring" : "tween",
        stiffness: type === "spring" ? 60 : undefined,
        damping: type === "spring" ? 20 : undefined,
        duration: duration,
        delay: delay,
      },
    },
  };

  // Determine which Motion component to use based on animation type
  return type === "inView" ? (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={inViewVariants}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={regularVariants}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
  once = true,
  amount = 0.3,
}: {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  // Animate text letter by letter
  const letters = Array.from(children);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay, staggerDirection: i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: -10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {letters.map((letter, index) => (
        <motion.span key={`${letter}-${index}-${children}`} className="inline-block" variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function FadeInWhenVisible({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
        }
      }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleInWhenVisible({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: delay,
          stiffness: 100,
          damping: 15
        }
      }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
