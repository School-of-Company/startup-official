"use client";

import { AnimatePresence, motion } from "framer-motion";
import { APPLICATION_DEADLINE } from "@/shared/config";
import { EASE_OUT, STAGGER_CHILD, useCountdown, useReducedMotionSafe } from "@/shared/lib";

const UNITS = [
  { key: "days", label: "DD" },
  { key: "hours", label: "HH" },
  { key: "minutes", label: "MM" },
  { key: "seconds", label: "SS" },
] as const;

function CountdownDigit({ char }: { char: string }) {
  const reduceMotion = useReducedMotionSafe();

  return (
    <span className="relative inline-block h-[1.15em] w-[0.62em] overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={char}
          initial={{ opacity: 0, y: reduceMotion ? 0 : "45%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : "-45%" }}
          transition={{ duration: reduceMotion ? 0.1 : 0.3, ease: EASE_OUT }}
          className="absolute inset-0 flex items-center justify-center font-bold tabular-nums tracking-tight text-fg"
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CountdownTile({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  const reduceMotion = useReducedMotionSafe();
  const digits = String(value).padStart(2, "0").split("");

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.5, delay }}
      className="flex w-20 flex-col items-center gap-2 rounded-card border border-border bg-surface py-4 sm:w-28 sm:py-6 lg:w-32 lg:py-7"
    >
      <span className="flex text-3xl sm:text-5xl lg:text-6xl">
        {digits.map((char, i) => (
          <CountdownDigit key={i} char={char} />
        ))}
      </span>
      <span className="text-xs font-semibold tracking-[0.2em] text-muted sm:text-sm">{label}</span>
    </motion.div>
  );
}

export default function Countdown() {
  const timeLeft = useCountdown(APPLICATION_DEADLINE);
  const reduceMotion = useReducedMotionSafe();

  if (timeLeft.isOver) {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.5, ease: EASE_OUT }}
        className="flex flex-col items-center gap-3 rounded-card bg-surface px-10 py-8 sm:px-14 sm:py-9"
      >
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.4, delay: STAGGER_CHILD, ease: EASE_OUT }}
          className="text-[17px] font-semibold text-muted"
        >
          모집이 마감되었습니다.
        </motion.p>
      </motion.div>
    );
  }

  const values: Record<(typeof UNITS)[number]["key"], number> = {
    days: timeLeft.days,
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.p
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.5 }}
        className="text-lg font-semibold tracking-wide text-muted sm:text-xl"
      >
        모집 마감까지
      </motion.p>
      <div className="flex items-center gap-2 sm:gap-4">
        {UNITS.flatMap((unit, i) => [
          <CountdownTile
            key={unit.key}
            value={values[unit.key]}
            label={unit.label}
            delay={i * STAGGER_CHILD}
          />,
          i < UNITS.length - 1 ? (
            <span
              key={`sep-${unit.key}`}
              aria-hidden
              className="text-2xl font-bold text-muted/40 sm:text-4xl"
            >
              :
            </span>
          ) : null,
        ])}
      </div>
    </div>
  );
}
