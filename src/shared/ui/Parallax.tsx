"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/shared/lib";

export default function Parallax({
  children,
  speed = 0.25,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const effectiveSpeed = reduceMotion ? 0 : speed;
  const range = 40 * effectiveSpeed;
  // translateY moves this layer by up to `range`% of its own height, so it's
  // overscanned beyond the container by a matching margin to avoid exposing
  // an edge of the container behind it while scrolling.
  const overscan = range === 0 ? 0 : (range / (1 - (2 * range) / 100)) * 1.15;
  const y = useTransform(scrollYProgress, [0, 1], [`${-range}%`, `${range}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y,
          position: "absolute",
          top: `${-overscan}%`,
          bottom: `${-overscan}%`,
          left: 0,
          right: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
