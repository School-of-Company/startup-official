"use client";

import { useEffect, useState } from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
};

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false };

function toTimeLeft(diffMs: number): TimeLeft {
  if (diffMs <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  const totalSeconds = Math.floor(diffMs / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isOver: false,
  };
}

/**
 * SSR-safe countdown to a fixed target date. Renders a zeroed state on first
 * paint (matching the server) and ticks every second after mount -- same
 * pattern as useReducedMotionSafe.
 */
export function useCountdown(target: string) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO);

  useEffect(() => {
    const targetMs = new Date(target).getTime();
    function tick() {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTimeLeft(toTimeLeft(targetMs - Date.now()));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}
