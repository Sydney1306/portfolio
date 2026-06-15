import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectPlaceholder from "./project-placeholder";

const gradients: Record<string, string> = {
  "suki-ai":
    "linear-gradient(135deg, #0a1628 0%, #1a2a4a 50%, #2a4a6a 100%)",
  "miband-zepp-life":
    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  intellisight:
    "linear-gradient(135deg, #1e1b2e 0%, #2d1b4e 50%, #4a1b6e 100%)",
  "flo-evaluation":
    "linear-gradient(135deg, #1e1a2e 0%, #3a1a3e 50%, #5a1a4e 100%)",
  "fabric-of-time":
    "linear-gradient(135deg, #1a2e1e 0%, #1a3e2e 50%, #1a4e3e 100%)",
  "pomodoro-timer":
    "linear-gradient(135deg, #2e1a1a 0%, #4e2a1a 50%, #6e3a1a 100%)",
  "digitisation-of-litigation":
    "linear-gradient(135deg, #1a1a2e 0%, #2a1a3e 50%, #3a1a4e 100%)",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-xl border border-border bg-surface overflow-hidden hover:bg-surface-hover transition-all duration-200"
    >
      <ProjectPlaceholder
        title={project.title}
        gradient={gradients[project.slug]}
      />

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-background text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mt-1">
          {project.subtitle}
        </p>

        <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
          <span>{project.role}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{project.duration}</span>
        </div>
      </div>
    </Link>
  );
}
