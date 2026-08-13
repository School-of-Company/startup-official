"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// wheelMultiplier below 1 scales down how far each wheel/trackpad tick moves
// the page, slowing the overall scroll speed. Lenis drives the real
// window scroll position under the hood, so native scroll listeners
// (framer-motion's useScroll, etc.) keep working unchanged, and it already
// honors prefers-reduced-motion internally.
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ wheelMultiplier: 0.8 });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    let frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // This layout persists across route changes, so Lenis keeps the previous
    // page's scroll position in its own animation loop unless we force it
    // to sync — otherwise it fights Next.js's scroll restoration and links
    // like "모집 안내 보러가기" land mid-page instead of at the top. A link
    // like "← 프로젝트 목록으로" (/#projects) still needs to land on that
    // section rather than being forced to the very top, so hash targets are
    // routed through Lenis's own scrollTo instead. The target section can
    // still be a frame away from mounting right after a route change, so
    // retry across a few frames before giving up and going to the top.
    let cancelled = false;
    let frameId: number;

    const attempt = (triesLeft: number) => {
      if (cancelled) return;
      const hash = window.location.hash;
      if (hash) {
        if (document.querySelector(hash)) {
          lenisRef.current?.scrollTo(hash, { immediate: true });
          return;
        }
        if (triesLeft > 0) {
          frameId = requestAnimationFrame(() => attempt(triesLeft - 1));
          return;
        }
      }
      lenisRef.current?.scrollTo(0, { immediate: true });
    };

    attempt(30);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}
