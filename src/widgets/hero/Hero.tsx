"use client";

import { motion } from "framer-motion";
import { Countdown } from "@/widgets/countdown";
import { DURATION, EASE_OUT, STAGGER_CHILD, useReducedMotionSafe } from "@/shared/lib";
import { FrontendIcon, BackendIcon } from "@/entities/track";

export default function Hero() {
  const reduceMotion = useReducedMotionSafe();

  const float = (rotate: number, delay: number) => ({
    style: { rotate },
    animate: reduceMotion ? undefined : { y: [0, -18, 0] },
    transition: reduceMotion
      ? undefined
      : {
          duration: 5,
          delay,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
  });

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0.25, ease: "linear" as const }
        : { duration: DURATION.hero, delay: i * STAGGER_CHILD, ease: EASE_OUT },
    }),
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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden items-center justify-between px-4 lg:flex xl:px-10"
      >
        <motion.div className="text-fg opacity-[0.16]" {...float(10, 0)}>
          <FrontendIcon className="h-40 w-40 xl:h-56 xl:w-56" />
        </motion.div>

        <motion.div className="text-fg opacity-[0.16]" {...float(-10, 0.6)}>
          <BackendIcon className="h-40 w-40 xl:h-56 xl:w-56" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-wide flex-col items-center px-6 text-center sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="frost mb-6 inline-flex items-center gap-2 rounded-full bg-surface/60 px-4 py-2 text-xs font-medium text-muted backdrop-blur-md"
        >
          <span
            className={`h-2 w-2 rounded-full bg-accent-soft ${reduceMotion ? "" : "animate-pulse"}`}
          />
          5세대 스타트업 팀원 공개 채용
        </motion.div>

        <h1 className="max-w-5xl text-balance text-[2.5rem] font-bold leading-[1.15] tracking-tight sm:text-6xl sm:leading-[1.1] lg:text-[4.25rem] lg:tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineReveal(0.1)}>
              <span className="text-gradient">스타트업</span>과 함께 할
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" {...lineReveal(0.18)}>
              10기 팀원을 모집합니다.
            </motion.span>
          </span>
        </h1>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-10">
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
