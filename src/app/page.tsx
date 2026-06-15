import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <div className="container-main py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          Nitya Vyas
        </h1>
        <p className="text-lg md:text-xl text-muted mt-3 max-w-2xl">
          Product designer shaping AI-powered experiences in healthcare and beyond.
          Currently at <span className="text-foreground font-medium">Suki.ai</span> — building
          clinical AI tools that reduce physician burnout.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          M.Des Interaction Design · IDC IIT Bombay · UX Research · Interaction Design
        </p>
      </section>

      {/* Featured Work */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Archive */}
      <section>
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
          Archive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archive.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
