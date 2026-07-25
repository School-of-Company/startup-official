export default function SectionGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(255,59,92,0.22) 0%, rgba(255,59,92,0) 70%)",
      }}
    />
  );
}
