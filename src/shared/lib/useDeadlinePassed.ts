"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe one-shot deadline check. Unlike useCountdown, this never polls --
 * it renders `false` on first paint (matching the server), then schedules a
 * single timeout that flips to `true` exactly when the deadline passes, so
 * callers that only care about the before/after boundary don't re-render
 * every second.
 */
export function useDeadlinePassed(target: string): boolean {
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    const remainingMs = new Date(target).getTime() - Date.now();
    if (remainingMs <= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsPassed(true);
      return;
    }
    const id = setTimeout(() => setIsPassed(true), remainingMs);
    return () => clearTimeout(id);
  }, [target]);

  return isPassed;
}
