import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionHeading } from "@/shared/ui";
import { PROJECTS } from "@/entities/project";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-16 overflow-hidden bg-surface/30 py-24 sm:py-32">
      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Track Record"
          title="스타트업 프로젝트"
          description="스타트업 프로젝트는 실제 사용자와 함께 운영됩니다."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <div className="group relative h-full overflow-hidden rounded-card bg-surface transition-[scale,translate] duration-300 ease-out hover:duration-200 hover:-translate-y-1 active:scale-[0.985]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-card opacity-0 shadow-2xl shadow-accent/10 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  />
                  <div className="relative aspect-video overflow-hidden bg-surface2">
                    <Image
                      src={project.image}
                      alt={`${project.name} 서비스 화면`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="mb-3 text-lg font-semibold">{project.name}</h3>
                    {project.stack.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-surface2 px-2.5 py-1 text-xs text-muted"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
