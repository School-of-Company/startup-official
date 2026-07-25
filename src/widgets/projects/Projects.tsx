import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";
import { PROJECTS } from "@/entities/project";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-16 overflow-hidden bg-surface/30 py-24 sm:py-32">
      <SectionGlow className="-bottom-40 -right-32 h-[460px] w-[460px]" />

      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Track Record"
          title="우리가 실제로 만든 서비스"
          description="스타트업 동아리 프로젝트는 실제 사용자와 함께 운영됩니다."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const Card = (
              <div className="group h-full overflow-hidden rounded-card border border-transparent bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent-dim hover:shadow-2xl hover:shadow-accent/10">
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-surface2">
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(${i % 2 === 0 ? 135 : 225}deg, rgba(255,59,92,0.12) 0%, rgba(255,59,92,0) 55%)`,
                    }}
                  />
                  <div className="flex flex-col items-center gap-4 text-muted">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="opacity-60"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="text-xs">랜딩 이미지 예정</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-accent-soft">
                        {project.period}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                    </div>
                    {project.href && (
                      <span className="mt-1 text-muted transition-colors group-hover:text-fg">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-muted">{project.description}</p>
                  <p className="text-sm font-medium text-fg">{project.metric}</p>
                </div>
              </div>
            );

            return (
              <Reveal key={project.name} delay={(i % 2) * 0.08}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
