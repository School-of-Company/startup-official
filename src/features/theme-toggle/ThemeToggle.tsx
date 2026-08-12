"use client";

import { MoonIcon, SunIcon } from "./icons";

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
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label="다크모드 / 라이트모드 전환"
      onClick={toggle}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg transition-colors hover:bg-surface ${className}`}
    >
      {/* Both icons are always in the DOM; `dark:` (a pure CSS selector keyed off
          the <html> class set by THEME_SCRIPT before first paint) picks the right
          one instantly -- no client JS/hydration required, so there's no blank flash. */}
      <MoonIcon className="hidden dark:block" />
      <SunIcon className="dark:hidden" />
    </button>
  );
}
