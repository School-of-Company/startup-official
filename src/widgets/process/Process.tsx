"use client";

import { APPLICATION_DEADLINE } from "@/shared/config";
import { useCountdown } from "@/shared/lib";
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

export default function Process() {
  const { isOver } = useCountdown(APPLICATION_DEADLINE);

  return (
    <section
      id="process"
      className={`relative scroll-mt-16 pt-24 sm:pt-32 ${isOver ? "pb-20 sm:pb-24" : ""}`}
    >
      <div className="relative mx-auto max-w-content px-6 text-center sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Process" title="모집 일정" />

        <Reveal>
          <div className="mx-auto max-w-2xl rounded-card bg-surface p-10 sm:p-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent-soft">
              지원 마감
            </p>
            <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {isOver ? "모집이 마감되었습니다" : formatDeadlineKorean(APPLICATION_DEADLINE)}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            이후 세부 일정은 추후 안내해드리겠습니다. 감사합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
