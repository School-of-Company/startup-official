"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe viewport check for Tailwind's `sm` breakpoint (640px). Always
 * renders `false` on first paint (matching the server) and updates via
 * effect after mount -- same pattern as useReducedMotionSafe.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}
