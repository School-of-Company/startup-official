import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";

const TRAITS = [
  {
    title: "책임감 있는 몰입",
    description: "진행 중인 프로젝트에 애정과 책임감을 가진 사람",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.2l2 2 4-4.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "활발한 커뮤니케이션",
    description: "팀원과 커뮤니케이션이 활발하고 연락을 잘 보는 사람",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5h16v10H8l-4 4V5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15.5" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "성장을 향한 갈망",
    description: "전공 실력을 향상시키고 개발자가 되는 것이 꿈인 사람",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 17l6-6 4 4 7-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 6.5h6V12.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Talent() {
  return (
    <section id="talent" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      <SectionGlow className="-right-40 top-10 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Culture"
          title="스타트업의 인재상"
          description="기술보다 태도를 먼저 봅니다. 이런 사람과 함께하고 싶어요."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {TRAITS.map((trait, i) => (
            <Reveal key={trait.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col items-center rounded-card border border-transparent bg-surface p-8 text-center transition-[transform,translate,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent-dim hover:shadow-2xl hover:shadow-accent/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-accent-soft text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {trait.icon}
                </div>
                <h3 className="text-lg font-semibold">{trait.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{trait.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
