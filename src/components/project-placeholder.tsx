export default function ProjectPlaceholder({
  title,
  gradient,
}: {
  title: string;
  gradient?: string;
}) {
  const bg =
    gradient ||
    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)";

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden border border-border"
      style={{ background: bg }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm text-muted-foreground/60 font-medium text-center px-4">
          {title}
        </span>
      </div>
    </div>
  );
}
