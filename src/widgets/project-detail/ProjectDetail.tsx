import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/entities/project";
import GithubButton from "./GithubButton";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Link
          href="/#projects"
          className="text-sm text-muted transition-colors hover:text-fg"
        >
          ← 프로젝트 목록으로
        </Link>

        <div className="relative mx-auto mt-8 aspect-video w-full overflow-hidden rounded-card bg-surface2 sm:w-1/2">
          <Image
            src={project.image}
            alt={`${project.name} 서비스 화면`}
            fill
            sizes="(min-width: 1320px) 660px, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h1>

          {project.stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full bg-surface2 px-3 py-1 text-xs text-muted">
                  {s}
                </span>
              ))}
            </div>
          )}

          <GithubButton project={project} />

          <div className="mt-6 space-y-4">
            {(project.detail ?? [project.description]).map((line, i) => (
              <p
                key={i}
                className="text-balance text-base leading-relaxed text-muted sm:text-lg"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
