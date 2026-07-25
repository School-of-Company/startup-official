"use client";

import { motion } from "framer-motion";
import { APPLY_URL, GENERATION } from "@/shared/config";
import { Parallax } from "@/shared/ui";
import { useReducedMotionSafe } from "@/shared/lib";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Spring",
  "Kotlin",
  "Swift",
  "Terraform",
  "AWS",
  "Python",
  "MySQL",
  "Redis",
  "Figma",
  "Notion",
];

export default function Hero() {
  const reduceMotion = useReducedMotionSafe();
  const stackItems = reduceMotion ? STACK : [...STACK, ...STACK];

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0.25, ease: "linear" as const }
        : { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-medium text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-accent-soft" />
          5세대 스타트업 동아리 팀원 공개 채용
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="max-w-5xl text-balance text-[2.5rem] font-bold leading-[1.15] tracking-tight sm:text-6xl sm:leading-[1.1] lg:text-[4.25rem] lg:tracking-[-0.03em]"
        >
          <span className="text-gradient">스타트업 동아리</span>와 함께 할
          <br />
          10기 팀원을 모집합니다.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          스타트업 동아리는 외주 프로젝트를 직접 수주·설계·개발하며 지역
          공공기관과 협업해 실사용 서비스를 만드는 실전 중심 개발 동아리입니다.
          실제 사용자를 위한 프로덕트를 처음부터 끝까지 직접 만듭니다.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={APPLY_URL ?? "/apply"}
            className="w-full rounded-full bg-linear-to-r from-accent to-accent-soft px-8 py-4 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(255,59,92,0.65)] transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
          >
            {GENERATION} 지원하기
          </a>
          <a
            href="#projects"
            className="w-full rounded-full border border-border px-8 py-4 text-sm font-semibold text-fg transition-colors hover:bg-surface sm:w-auto"
          >
            우리가 만든 서비스 보기
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="relative mt-12 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg to-transparent" />
        <div
          className={`flex w-max gap-4 ${reduceMotion ? "" : "animate-marquee"}`}
        >
          {stackItems.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full bg-surface px-5 py-3 text-sm font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
