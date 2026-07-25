import type { JSX } from "react";
import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";
import { TRACKS } from "@/entities/track";

const ICONS: Record<string, JSX.Element> = {
  frontend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="6.25" r="0.6" fill="currentColor" />
      <circle cx="8" cy="6.25" r="0.6" fill="currentColor" />
    </svg>
  ),
  backend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 5.5V12c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5.5M5 12v6.5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V12"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  devops: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.5v2.3M12 18.2v2.3M20.5 12h-2.3M5.8 12H3.5M17.7 6.3l-1.6 1.6M7.9 16.1l-1.6 1.6M17.7 17.7l-1.6-1.6M7.9 7.9 6.3 6.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  ai: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5c.5 3 2 4.5 5 5-3 .5-4.5 2-5 5-.5-3-2-4.5-5-5 3-.5 4.5-2 5-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 15.2c.28 1.4.98 2.1 2.4 2.4-1.42.28-2.12.98-2.4 2.4-.28-1.42-.98-2.12-2.4-2.4 1.42-.3 2.12-1 2.4-2.4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Tracks() {
  return (
    <section id="tracks" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      <SectionGlow className="-right-40 top-10 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Recruitment"
          title="모집 포지션"
          description="스타트업 동아리와 함께할 10기 팀원을 아래와 같이 모집합니다."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map((track, i) => (
            <Reveal key={track.key} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-card bg-surface p-8 transition-[transform,translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-accent-soft text-white">
                  {ICONS[track.key] ?? ICONS.frontend}
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold">{track.name}</h3>
                  <p className="mt-1 text-sm text-accent-soft">{track.enName}</p>
                </div>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-muted">
                  {track.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {track.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-surface2 px-3 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
