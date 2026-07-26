"use client";

import { useEffect, useState } from "react";

export type OS = "ios" | "android" | "other";

function detectOS(): OS {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent;
  // iPadOS 13+ reports as "Macintosh" in its UA; touch points is the usual
  // workaround to still tell it apart from an actual Mac.
  const isIPad = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/.test(ua) || isIPad) return "ios";
  if (/Android/.test(ua)) return "android";
  return "other";
}

/** SSR-safe OS sniff: renders "other" on first paint (matching the server), updates after mount. */
export function useOS() {
  const [os, setOS] = useState<OS>("other");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOS(detectOS());
  }, []);

  return os;
}
