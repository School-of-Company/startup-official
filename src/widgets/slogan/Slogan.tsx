"use client";

import { motion } from "framer-motion";
import { Parallax } from "@/shared/ui";
import { EASE_OUT, useReducedMotionSafe } from "@/shared/lib";

export default function Slogan() {
  const reduceMotion = useReducedMotionSafe();

  const fadeUp = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
  };

  const lineReveal = (delay: number) => ({
    initial: { y: reduceMotion ? 0 : "110%" },
    animate: { y: 0 },
    transition: reduceMotion
      ? { duration: 0.25, ease: "linear" as const }
      : { duration: 0.8, delay, ease: EASE_OUT },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32"
    >
      <Parallax speed={0.4} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-glow" />
      </Parallax>
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,130,155,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,130,155,0.16) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 80%)",
        }}
      />

      <div className="mx-auto flex max-w-wide flex-col items-center px-6 text-center sm:px-8">
        <motion.p
          {...fadeUp}
          transition={{ duration: reduceMotion ? 0.25 : 0.6, ease: EASE_OUT }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft"
        >
          Manifesto
        </motion.p>

        <h1 className="max-w-4xl text-balance text-[2.5rem] font-bold leading-[1.15] tracking-tight sm:text-6xl sm:leading-[1.1] lg:text-[4.25rem] lg:tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineReveal(0.1)}>
              학생이라는 이름 위에
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineReveal(0.18)}>
              실력으로 증명합니다.
            </motion.span>
          </span>
        </h1>

        <motion.p
          {...fadeUp}
          transition={{
            duration: reduceMotion ? 0.25 : 0.6,
            delay: reduceMotion ? 0 : 0.3,
            ease: EASE_OUT,
          }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          스타트업은 외주 프로젝트를 직접 수주·설계·개발하며 지역
          공공기관과 협업해 실사용 서비스를 만드는 실전 중심 개발팀입니다.
          실제 사용자를 위한 프로덕트를 처음부터 끝까지 직접 만듭니다.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{
            duration: reduceMotion ? 0.25 : 0.6,
            delay: reduceMotion ? 0 : 0.4,
            ease: EASE_OUT,
          }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="/recruit"
            className="w-full rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.98] sm:w-auto"
          >
            모집 안내 보기
          </a>
          <a
            href="#projects"
            className="w-full rounded-full border border-border px-8 py-4 text-sm font-semibold text-fg transition-[background-color,scale] duration-150 ease-out hover:bg-surface active:scale-[0.98] sm:w-auto"
          >
            스타트업 프로젝트 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
