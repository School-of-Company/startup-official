"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/shared/lib";

const TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };
const REDUCED_TRANSITION = { duration: 0.25, ease: "linear" as const };

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
