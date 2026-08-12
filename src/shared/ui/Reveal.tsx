"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT, REDUCED_TRANSITION, useReducedMotionSafe } from "@/shared/lib";

const TRANSITION = { duration: DURATION.reveal, ease: EASE_OUT };

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotionSafe();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={reduceMotion ? { ...REDUCED_TRANSITION, delay } : { ...TRANSITION, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
