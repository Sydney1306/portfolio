import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const publications = [
  {
    title:
      "Investigating Surface Finishing to Develop an Advanced Process for Super-Finish in Jewellery Making",
    authors: "PK Vyas, N Vyas",
    venue: "Google Scholar",
    year: 2024,
  },
  {
    title: "Demystifying Dhaga Polish — The Art of Thrumming",
    authors: "PK Vyas, N Vyas",
    venue: "ResearchGate",
    year: 2024,
  },
  {
    title: "Digitisation of Litigation in India",
    authors: "N Vyas",
    venue: "M.Des Thesis, IDC IIT Bombay",
    year: 2025,
  },
];

const tools = [
  "Figma",
  "Framer",
  "Miro",
  "UserTesting",
  "Qualtrics",
  "Principle",
  "Adobe Creative Suite",
  "HTML/CSS",
  "Python (data analysis)",
  "React (learning)",
];

export default function About() {
  return (
    <div className="container-main py-16 md:py-24">
      <div className="max-w-3xl">
        {/* Intro */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            About
          </h1>

          <div className="space-y-4 text-base leading-relaxed">
            <p>
              I&apos;m a Product Designer at <strong>Suki.ai</strong>, where I
              design AI-powered clinical tools that reduce physician burnout and
              improve patient outcomes. My work sits at the intersection of
              interaction design, UX research, and artificial intelligence —
              building products that feel assistive, not intrusive, in
              high-stakes environments.
            </p>

            <p>
              I hold an <strong>M.Des in Interaction Design</strong> from{" "}
              <strong>IDC, IIT Bombay</strong> and a{" "}
              <strong>B.Des in Industrial Design</strong> from{" "}
              <strong>Srishti Institute of Art, Design &amp; Technology</strong>,
              Bangalore. This dual foundation — in both physical craft and
              digital interaction — shapes how I approach design: as a
              continuum between the tangible and the digital.
            </p>

            <p>
              My research spans healthcare UX, wearable technology, legal tech
              digitisation, and traditional Indian jewellery manufacturing
              processes. I&apos;m driven by questions about how AI changes the
              designer&apos;s role — not replacing judgment, but expanding what
              we can explore.
            </p>
          </div>
        </section>

        {/* Currently */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Currently
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5">→</span>
              <span>
                Designing AI-native clinical workflows at Suki.ai
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5">→</span>
              <span>
                Learning React to ship design-engineer-quality interfaces
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5">→</span>
              <span>
                Exploring how UX research methods adapt for AI products with
                probabilistic outputs
              </span>
            </li>
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Publications &amp; Research
          </h2>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div
                key={i}
                className="border-l-2 border-border pl-4 py-1"
              >
                <p className="text-sm leading-relaxed">{pub.title}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {pub.authors} · {pub.venue} · {pub.year}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="https://scholar.google.com/citations?user=NTJAKW8AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors mt-4"
          >
            Google Scholar
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Tools &amp; Methods
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1 rounded-full bg-surface text-muted-foreground border border-border"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Fun Stuff */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            When I&apos;m not designing
          </h2>
          <div className="space-y-2 text-sm text-muted">
            <p>
              You&apos;ll find me with a brush in hand —{" "}
              <strong className="text-foreground">
                botanical illustrations
              </strong>{" "}
              are my way of staying observant. I also sculpt, read, and
              occasionally strum my ukulele badly but enthusiastically.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              These analog practices keep me grounded in craft — something I
              bring back to every pixel I push.
            </p>
          </div>
        </section>

        {/* Resume */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="https://drive.google.com/file/d/1jW2fk4J9QogPFSnac6xAZQc9ltUVNs6G/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View Resume (PDF)
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
