"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";

/** Hairline reading-progress rule under the header. Transform-only. */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
    />
  );
}
