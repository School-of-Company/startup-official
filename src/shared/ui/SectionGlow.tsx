export default function SectionGlow({
  className = "",
  opacity = 0.22,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        background: `radial-gradient(circle, rgba(255,59,92,${opacity}) 0%, rgba(255,59,92,0) 70%)`,
      }}
    />
  );
}
