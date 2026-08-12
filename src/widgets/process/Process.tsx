"use client";

import { cubicBezier, motion } from "framer-motion";
import { APPLICATION_DEADLINE } from "@/shared/config";
import { EASE_IN_OUT, STAGGER_CHILD, useCountdown, useReducedMotionSafe } from "@/shared/lib";
import { Reveal, SectionHeading } from "@/shared/ui";

function formatDeadlineKorean(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).formatToParts(new Date(iso));

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  return `${get("year")}년 ${get("month")}월 ${get("day")}일(${get("weekday")}) ${get("dayPeriod")} ${get("hour")}시 ${get("minute")}분 ${get("second")}초`;
}

const STEPS = [
  {
    index: "01",
    title: "서류 접수",
    body: "이력과 포부가 담긴 지원서를 접수받습니다.",
  },
  {
    index: "02",
    title: "서류 발표",
    body: "제출하신 지원서를 검토해 서류 결과를 개별 안내합니다.",
    timing: "마감 후 약 1주 내 안내",
  },
  {
    index: "03",
    title: "면접",
    body: "서류에 담긴 이야기를 직접 나누는 자리입니다. 면접 일정과 방식은 서류 결과 발표 시 함께 안내됩니다.",
    timing: "서류 결과 발표 후 순차 진행",
  },
  {
    index: "04",
    title: "최종 발표",
    body: "면접까지 마친 지원자에게 최종 결과를 안내합니다.",
    timing: "면접 종료 후 빠르게 안내",
  },
];

export default function Process() {
  const { isOver } = useCountdown(APPLICATION_DEADLINE);
  const reduceMotion = useReducedMotionSafe();
  const easeInOut = cubicBezier(...EASE_IN_OUT);

  return (
    <section
      id="process"
      className={`relative scroll-mt-16 pt-24 sm:pt-32 ${isOver ? "pb-20 sm:pb-24" : ""}`}
    >
      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Process"
          title="모집 일정"
          description="지원부터 합류까지, 스타트업과 함께하는 여정입니다."
        />

        <div className="mb-6 hidden lg:grid lg:grid-cols-4 lg:items-center lg:gap-6">
          {STEPS.map((step, i) => (
            <div key={step.index} className="relative flex items-center justify-center">
              <span
                className={`relative z-10 h-3 w-3 shrink-0 rounded-full ${
                  i === 0 && isOver ? "bg-accent" : "bg-surface2 ring-1 ring-border"
                }`}
              />
              {i < STEPS.length - 1 && (
                <div className="absolute left-1/2 top-1/2 h-px w-[calc(100%+1.5rem)] -translate-y-1/2 bg-border">
                  {i === 0 && (
                    <motion.div
                      className="absolute inset-y-0 left-0 w-full origin-left bg-accent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isOver ? 1 : 0 }}
                      transition={{ duration: reduceMotion ? 0.15 : 1.1, ease: easeInOut }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * STAGGER_CHILD}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-card bg-surface p-6 sm:p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 select-none text-[5rem] font-black leading-none text-fg/4"
                >
                  {step.index}
                </span>
                <p className="relative mb-3 text-xs font-semibold tracking-[0.2em] text-accent-soft">
                  STEP {step.index}
                </p>
                <h3 className="relative text-lg font-bold tracking-tight sm:text-xl">
                  {step.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
                <p className="relative mt-4 text-sm font-semibold text-accent-soft">
                  {i === 0
                    ? isOver
                      ? "모집이 마감되었습니다"
                      : formatDeadlineKorean(APPLICATION_DEADLINE)
                    : step.timing}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
