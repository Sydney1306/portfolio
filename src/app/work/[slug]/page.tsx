import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ProjectPlaceholder from "@/components/project-placeholder";

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

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container-main py-12 md:py-20">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to work
      </Link>

      {/* Hero Image */}
      <div className="mb-10">
        <ProjectPlaceholder
          title={project.title}
          gradient={gradients[project.slug]}
        />
      </div>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg text-muted mt-2">{project.subtitle}</p>

        <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
          <div>
            <span className="text-foreground font-medium">Role:</span>{" "}
            {project.role}
          </div>
          <div>
            <span className="text-foreground font-medium">Duration:</span>{" "}
            {project.duration}
          </div>
          {project.team && (
            <div>
              <span className="text-foreground font-medium">Team:</span>{" "}
              {project.team}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-surface text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live project
            </a>
          )}
          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View on Behance
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo video
            </a>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl space-y-10">
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Summary
          </h2>
          <p className="text-base leading-relaxed">{project.summary}</p>
        </section>

        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Context &amp; Challenge
          </h2>
          <p className="text-base leading-relaxed">{project.challenge}</p>
        </section>

        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Approach
          </h2>
          <p className="text-base leading-relaxed">{project.approach}</p>
        </section>

        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Outcome
          </h2>
          <p className="text-base leading-relaxed">{project.outcome}</p>
          {project.metrics && (
            <p className="text-sm text-muted-foreground mt-2 italic">
              {project.metrics}
            </p>
          )}
        </section>
      </div>
    </article>
  );
}
