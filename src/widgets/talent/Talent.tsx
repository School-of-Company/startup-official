import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";

const TRAITS = [
  {
    title: "책임감 있는 몰입",
    description: "진행 중인 프로젝트에 애정과 책임감을 가진 사람",
    glow: "0%",
    icon: (
      <svg width="88" height="88" viewBox="0 0 124 130" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.6404 65.4187C54.6347 67.0582 46.768 73.2839 41.6002 77.0541C39.441 78.6286 36.4541 76.9385 36.8284 74.2879L41.0388 46.532C41.2188 45.3692 42.0897 44.4375 43.2484 44.2569C46.5089 43.7514 53.3248 41.9746 58.5789 35.8356C61.4578 32.4771 63.0413 28.1942 63.689 23.8102C64.236 20.1051 64.3224 15.7716 63.0197 12.3193C60.8389 4.99571 49.9924 -2.38563 37.5337 0.734463C29.2279 3.21176 23.3692 9.09084 19.4898 22.7774L0.510288 103.56C-1.27467 111.223 1.71225 119.204 8.07475 123.798L8.20431 123.899C10.9681 125.907 14.1925 127.178 17.6041 127.59C35.8063 129.749 102.051 135.224 120.851 116.142C132.662 104.138 110.451 62.2769 67.6404 65.4187Z"
        />
      </svg>
    ),
  },
  {
    title: "활발한 커뮤니케이션",
    description: "팀원과 커뮤니케이션이 활발하고 연락을 잘 보는 사람",
    glow: "50%",
    glowSize: "14rem",
    icon: (
      <svg width="88" height="88" viewBox="0 0 181 181" fill="currentColor">
        <path d="M90.5032 26C54.3196 26 25 52.6455 25 84.8639C25 100.357 31.864 114.605 43.0918 125.138L37.4746 151.165C36.8512 153.642 39.3449 155.499 41.8385 154.88L71.1581 141.251C77.3987 143.108 83.6328 143.728 90.4967 143.728C126.68 143.728 156 117.082 156 84.8639C156 52.6455 126.687 26 90.5032 26Z" />
      </svg>
    ),
  },
  {
    title: "성장을 향한 갈망",
    description: "전공 실력을 향상시키고 개발자가 되는 것이 꿈인 사람",
    glow: "100%",
    icon: (
      <svg width="88" height="88" viewBox="0 0 174 174" fill="none">
        <path
          d="M149 57L103.073 103.156L70.9272 70.8384L25 117"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Talent() {
  return (
    <section
      id="talent"
      className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32"
    >
      <SectionGlow className="-right-32 top-10 h-80 w-80" opacity={0.15} />

      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Culture"
          title="스타트업의 인재상"
          description="기술보다 태도를 먼저 봅니다. 이런 사람과 함께하고 싶어요."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {TRAITS.map((trait, i) => (
            <Reveal key={trait.title} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-card bg-surface p-8 text-center text-fg [--talent-accent:215_50_88] transition-[transform,translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20 dark:[--talent-accent:198_30_68]">
                <div
                  aria-hidden
                  style={{
                    left: trait.glow,
                    width: trait.glowSize ?? "20rem",
                    height: trait.glowSize ?? "20rem",
                    background: "rgb(var(--talent-accent))",
                  }}
                  className="pointer-events-none absolute -top-16 -translate-x-1/2 rounded-full opacity-80 blur-3xl transition-opacity duration-300 group-hover:opacity-95"
                />
                <h3 className="relative text-2xl font-extrabold">
                  {trait.title}
                </h3>
                <div className="relative flex flex-1 items-center justify-center py-10 text-white transition-transform duration-300 group-hover:scale-110">
                  {trait.icon}
                </div>
                <p className="relative text-base font-semibold leading-relaxed opacity-80">
                  {trait.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
