"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { APPLY_URL } from "@/shared/config";
import { useReducedMotionSafe } from "@/shared/lib";

export default function StickyApplyBar() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);
  const reduceMotion = useReducedMotionSafe();

  // Cached layout measurements. Only ever redone on resize/content-size-change,
  // never inside the scroll path.
  const measurements = useRef({ anchorDocTop: 0, barHeight: 0, gap: 24 });

  useEffect(() => {
    const anchor = anchorRef.current;
    const bar = barRef.current;
    if (!anchor || !bar) return;

    function measure() {
      measurements.current = {
        anchorDocTop: anchor!.getBoundingClientRect().top + window.scrollY,
        barHeight: bar!.offsetHeight,
        gap: window.innerWidth < 640 ? 16 : 24,
      };
      updateDocked(window.scrollY);
    }

    function updateDocked(scrollY: number) {
      const { anchorDocTop, barHeight, gap } = measurements.current;
      const targetTop = window.innerHeight - gap - barHeight;
      const naturalTop = anchorDocTop - scrollY;
      setDocked(naturalTop <= targetTop);
    }

    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [reduceMotion]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const { anchorDocTop, barHeight, gap } = measurements.current;
    const targetTop = window.innerHeight - gap - barHeight;
    const naturalTop = anchorDocTop - latest;
    setDocked(naturalTop <= targetTop);
  });

  return (
    <div
      id="apply"
      ref={anchorRef}
      className="relative mx-auto flex max-w-wide justify-center px-6 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16 lg:px-10"
    >
      <motion.div
        ref={barRef}
        layout
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          layout: { duration: reduceMotion ? 0.15 : 0.4, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: reduceMotion ? 0.15 : 0.4 },
          y: { duration: reduceMotion ? 0.15 : 0.4 },
        }}
        className={`frost z-40 mx-auto flex max-w-xl items-center justify-between gap-4 rounded-card border border-border bg-bg/20 px-6 py-4 backdrop-blur-xl ${
          docked ? "w-full" : "fixed inset-x-6 bottom-4 sm:inset-x-8 sm:bottom-6 lg:inset-x-10"
        }`}
      >
        <p className="min-w-0 text-sm font-semibold text-fg sm:text-base">
          스타트업 동아리 팀원 지원하기
        </p>
        <a
          href={APPLY_URL ?? "/apply"}
          className="shrink-0 rounded-full bg-linear-to-r from-accent to-accent-soft px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.98]"
        >
          지원하기
        </a>
      </motion.div>
    </div>
  );
}
