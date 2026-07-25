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
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-40 * effectiveSpeed}%`, `${40 * effectiveSpeed}%`]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
