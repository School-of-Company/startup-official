"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe alternative to framer-motion's useReducedMotion(), which reads
 * matchMedia synchronously during render and breaks hydration whenever the
 * OS preference is actually enabled (server always assumes false). This
 * always renders `false` on first paint (matching the server) and updates
 * via effect after mount.
 */
export function useReducedMotionSafe() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Deliberately deferred to an effect to match SSR's `false` default on
    // first paint -- see the hook doc comment above.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
