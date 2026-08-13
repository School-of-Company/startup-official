"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// wheelMultiplier below 1 scales down how far each wheel/trackpad tick moves
// the page, slowing the overall scroll speed. Lenis drives the real
// window scroll position under the hood, so native scroll listeners
// (framer-motion's useScroll, etc.) keep working unchanged, and it already
// honors prefers-reduced-motion internally.
export default function SmoothScroll() {
  const pathname = usePathname();

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

  useEffect(() => {
    // This layout persists across route changes, so Lenis keeps the previous
    // page's scroll position in its own animation loop unless we force it
    // back to the top — otherwise it fights Next.js's scroll restoration and
    // links like "모집 안내 보러가기" land mid-page instead of at the top.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
