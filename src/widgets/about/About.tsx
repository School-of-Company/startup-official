"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Reveal, SectionHeading, SectionGlow } from "@/shared/ui";
import { useIsMobile, useReducedMotionSafe } from "@/shared/lib";

const STORY = [
  {
    index: "01",
    title: (
      <>
        학생 개발팀, 그 이상의 <span className="text-accent-soft">서비스</span>를 만듭니다.
      </>
    ),
    body: (
      <>
        우리는 교실 안의 배움에 머무르지 않고, 실제 현장에서 사용되는 서비스를 만듭니다.
        교육청과 지자체의 프로젝트를 수행하며 기술로 지역과 교육 현장의 문제를 해결하고 있습니다.
      </>
    ),
  },
  {
    index: "02",
    title: (
      <>
        의뢰받은 프로젝트를, <span className="text-accent-soft">결과물</span>로 증명합니다.
      </>
    ),
    body: (
      <>
        스타트업은 외주 프로젝트를 직접 수주·설계·개발하며, 지역 공공기관과 협업해
        실사용 서비스를 만들어가는 실전 중심 개발팀입니다. 요구사항을 분석하고, 구조를
        설계하고, 서비스를 개발하며 아이디어가 실제 운영되는 결과물이 되는 과정을 직접 경험합니다.
      </>
    ),
  },
  {
    index: "03",
    title: (
      <>
        성장을 갈망하는 사람들이 모여, <span className="text-accent-soft">변화</span>를 만들어냅니다
      </>
    ),
    body: (
      <>
        우리는 각자의 가능성을 실제 결과로 증명하기 위해 모였습니다. 단순한 개발을 넘어,{" "}
        <span className="font-semibold text-accent-soft">2,000만 원 이상의 비용 절감</span>과{" "}
        <span className="font-semibold text-accent-soft">3만 명 이상의 사용자 운영 경험</span>을
        만들어왔습니다. 스타트업은 학생 개발팀이 실제 서비스의 가치를 증명하는 공간입니다.
      </>
    ),
  },
];

const N = STORY.length;

function FocusCard({
  cursor,
  index,
  label,
  title,
  body,
}: {
  cursor: MotionValue<number>;
  index: number;
  label: string;
  title: ReactNode;
  body: ReactNode;
}) {
  const d = useTransform(cursor, (c) => c - index);
  const x = useTransform(d, [-1, 0, 1, 2], [560, 0, -420, -520]);
  const scale = useTransform(d, [-1, 0, 1, 2], [0.86, 1, 0.84, 0.72]);
  const opacity = useTransform(d, [-1, -0.4, 0, 0.55, 1, 2], [0, 1, 1, 0.15, 0, 0]);
  const zIndex = useTransform(d, (v) => Math.round(100 - Math.abs(v) * 10));
  // Combined into one `transform` string instead of separate x/scale motion
  // values -- Framer Motion's x/scale shorthands animate via rAF on the main
  // thread and can drop frames on a busy scroll; a single transform lets the
  // browser composite it on the GPU.
  const transform = useMotionTemplate`translateX(${x}px) scale(${scale})`;

  return (
    <motion.div
      style={{ transform, opacity, zIndex }}
      className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-card bg-surface p-8 text-center sm:p-12"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-8 select-none text-[8rem] font-black leading-none text-fg/4"
      >
        {label}
      </span>
      <p className="relative mb-5 text-sm font-semibold tracking-[0.2em] text-accent-soft">
        {label}
      </p>
      <h3 className="relative text-balance text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
        {title}
      </h3>
      <p className="relative mx-auto mt-5 max-w-lg text-balance text-sm leading-relaxed text-muted sm:text-base">
        {body}
      </p>
    </motion.div>
  );
}

function StaticCard({
  label,
  title,
  body,
}: {
  label: string;
  title: ReactNode;
  body: ReactNode;
}) {
  return (
    <Reveal>
      <div className="relative flex h-full flex-col overflow-hidden rounded-card bg-surface p-8">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-3 -top-6 select-none text-[7rem] font-black leading-none text-fg/4"
        >
          {label}
        </span>
        <p className="relative mb-6 text-sm font-semibold tracking-[0.2em] text-accent-soft">
          {label}
        </p>
        <h3 className="relative text-balance text-xl font-bold leading-snug tracking-tight">
          {title}
        </h3>
        <p className="relative mt-5 flex-1 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </Reveal>
  );
}

function AboutHeader() {
  return (
    <SectionHeading
      eyebrow="About"
      title="스타트업이 일하는 방식"
      description="교육청, 지자체 등 실제 기관과 협업하며 수천, 수만 명이 사용하는 서비스를 만들어온 경험이 있습니다."
    />
  );
}

function AboutFocusCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const cursor = useTransform(scrollYProgress, [0, 1], [0, N - 1]);

  return (
    <section id="about" ref={containerRef} className="relative scroll-mt-16 h-auto sm:h-[380vh]">
      <div className="static flex h-auto flex-col justify-start overflow-visible py-16 sm:sticky sm:top-16 sm:h-[calc(100vh-4rem)] sm:justify-center sm:overflow-hidden sm:py-16">
        <SectionGlow className="-left-40 -top-40 h-[420px] w-[420px]" />

        <div className="relative mx-auto w-full max-w-wide px-6 sm:px-8 lg:px-10">
          <AboutHeader />

          <div className="relative mx-auto h-[400px] w-full max-w-2xl sm:h-[380px]">
            {STORY.map((block, i) => (
              <FocusCard
                key={block.index}
                cursor={cursor}
                index={i}
                label={block.index}
                title={block.title}
                body={block.body}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStatic() {
  return (
    <section id="about" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      <SectionGlow className="-left-40 -top-40 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <AboutHeader />

        <div className="grid gap-8 sm:grid-cols-3">
          {STORY.map((block) => (
            <StaticCard key={block.index} label={block.index} title={block.title} body={block.body} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const reduceMotion = useReducedMotionSafe();
  const isMobile = useIsMobile();
  return reduceMotion || isMobile ? <AboutStatic /> : <AboutFocusCarousel />;
}
