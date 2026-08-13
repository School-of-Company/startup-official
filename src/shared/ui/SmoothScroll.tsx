"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// wheelMultiplier below 1 scales down how far each wheel/trackpad tick moves
// the page, slowing the overall scroll speed. Lenis drives the real
// window scroll position under the hood, so native scroll listeners
// (framer-motion's useScroll, etc.) keep working unchanged, and it already
// honors prefers-reduced-motion internally.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ wheelMultiplier: 0.8 });

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    let frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
