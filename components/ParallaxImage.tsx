"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Subtle parallax drift for project media. Transform-only, disabled under
 * prefers-reduced-motion. Isolated client leaf so parents stay server components.
 */
export default function ParallaxImage({
  src,
  width,
  height,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [14, -14]);

  return (
    <div
      ref={ref}
      className={`media-frame overflow-hidden border border-line bg-paper-2 ${className}`}
    >
      <motion.img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={reduce ? undefined : { y, scale: 1.06 }}
        className="block h-auto w-full will-change-transform"
      />
    </div>
  );
}
