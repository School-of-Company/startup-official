"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { APPLY_URL } from "@/shared/config";
import { ThemeToggle } from "@/features/theme-toggle";
import { useReducedMotionSafe } from "@/shared/lib";
import { Logo } from "@/shared/ui";

const NAV_ITEMS = [
  { href: "#about", label: "소개" },
  { href: "#projects", label: "프로젝트" },
  { href: "#tracks", label: "모집 분야" },
  { href: "#process", label: "모집 절차" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotionSafe();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const menuSlide = reduceMotion ? 0 : -12;

  const scrollToHash = (hash: string) => (e: MouseEvent) => {
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        menuOpen
          ? "bg-bg border-b border-border"
          : scrolled
            ? "frost bg-bg/50 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="/#top" className="flex items-center" aria-label="홈으로 이동">
          <Logo className="h-5 w-auto text-fg sm:h-6" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              onClick={scrollToHash(item.href)}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href={APPLY_URL ?? "/apply"}
            className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.98]"
          >
            지원하기
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="메뉴 열기"
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-fg"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-5 bg-fg transition-transform ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-fg transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-fg transition-transform ${
                  menuOpen ? "translate-y-[-7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: menuSlide }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: menuSlide }}
            transition={{
              duration: reduceMotion ? 0.15 : 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="frost fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-bg/85 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={(e) => {
                    setMenuOpen(false);
                    scrollToHash(item.href)(e);
                  }}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0.15 : 0.3,
                    delay: reduceMotion ? 0 : 0.05 + i * 0.05,
                  }}
                  className="border-b border-border py-4 text-lg font-medium text-fg/90 transition-colors hover:text-accent-soft"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={APPLY_URL ?? "/apply"}
              onClick={() => setMenuOpen(false)}
              className="mt-8 w-full rounded-full bg-linear-to-r from-accent to-accent-soft px-4 py-4 text-center text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.98]"
            >
              지원하기
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
