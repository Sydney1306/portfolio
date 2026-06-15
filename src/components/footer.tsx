import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nitya-vyas-47ab2579/" },
  { label: "X / Twitter", href: "https://x.com/nitpixel" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=NTJAKW8AAAAJ&hl=en" },
  { label: "Email", href: "mailto:nitya.vyas@suki.ai" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-main py-12 flex flex-col md:flex-row items-start justify-between gap-8">
        <div>
          <p className="text-sm font-medium">Nitya Vyas</p>
          <p className="text-sm text-muted-foreground mt-1">
            Product Designer · AI Healthcare · UX Research
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container-main pb-8">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Nitya Vyas
        </p>
      </div>
    </footer>
  );
}
