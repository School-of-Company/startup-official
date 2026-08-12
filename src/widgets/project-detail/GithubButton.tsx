import type { Project } from "@/entities/project";
import { isHttpUrl } from "@/shared/lib";
import { GithubIcon } from "./icons";

export default function GithubButton({ project }: { project: Project }) {
  const repos = project.github?.filter((repo) => isHttpUrl(repo.url));
  if (!repos || repos.length === 0) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {repos.map((repo) => (
        <a
          key={repo.url}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface2"
        >
          <GithubIcon />
          {repos.length > 1 ? `GitHub · ${repo.label}` : "GitHub 바로가기"}
        </a>
      ))}
    </div>
  );
}
