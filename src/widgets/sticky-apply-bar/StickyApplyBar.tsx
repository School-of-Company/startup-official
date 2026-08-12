"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { APPLY_URL, APPLICATION_DEADLINE } from "@/shared/config";
import { useCountdown, useReducedMotionSafe, type TimeLeft } from "@/shared/lib";

function formatCountdown(t: TimeLeft) {
  if (t.isOver) return "모집이 마감되었습니다";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `마감까지 ${t.days}일 ${pad(t.hours)}:${pad(t.minutes)}:${pad(t.seconds)}`;
}

export default function StickyApplyBar() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);
  const reduceMotion = useReducedMotionSafe();
  const timeLeft = useCountdown(APPLICATION_DEADLINE);

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

  if (timeLeft.isOver) return null;

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
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-fg sm:text-base">
            스타트업 팀원 지원하기
          </p>
          <p className="mt-0.5 truncate text-xs tabular-nums text-muted sm:text-sm">
            {formatCountdown(timeLeft)}
          </p>
        </div>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.98]"
        >
          지원하기
        </a>
      </motion.div>
    </div>
  );
}
