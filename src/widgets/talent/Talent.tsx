import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";
import { CommitmentIcon, CommunicationIcon, GrowthIcon } from "./icons";

const TRAITS = [
  {
    title: "책임감 있는 몰입",
    description: "진행 중인 프로젝트에 애정과 책임감을 가진 사람",
    Icon: CommitmentIcon,
  },
  {
    title: "활발한 커뮤니케이션",
    description: "팀원과 커뮤니케이션이 활발하고 연락을 잘 보는 사람",
    Icon: CommunicationIcon,
  },
  {
    title: "성장을 향한 갈망",
    description: "전공 실력을 향상시키고 개발자로서 성장하고 싶은 사람",
    Icon: GrowthIcon,
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
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-card bg-surface p-8 text-center text-fg transition-[transform,translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20">
                <h3 className="relative text-2xl font-extrabold">
                  {trait.title}
                </h3>
                <div className="relative flex flex-1 items-center justify-center py-10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <trait.Icon />
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
