"use client";

import { useEffect, useState } from "react";

export const THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch (e) {}
})();
`;

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Syncing from the DOM class set by the pre-hydration inline script, not
    // deriving from React state -- must run once after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      aria-label="다크모드 / 라이트모드 전환"
      onClick={toggle}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg transition-colors hover:bg-surface ${className}`}
    >
      {isDark === null ? null : isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 2v2.2" />
            <path d="M12 19.8V22" />
            <path d="M4.2 4.2l1.55 1.55" />
            <path d="M18.25 18.25 19.8 19.8" />
            <path d="M2 12h2.2" />
            <path d="M19.8 12H22" />
            <path d="M4.2 19.8l1.55-1.55" />
            <path d="M18.25 5.75 19.8 4.2" />
          </g>
        </svg>
      )}
    </button>
  );
}
