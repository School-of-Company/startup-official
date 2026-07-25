import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-16 max-w-2xl px-6 text-center sm:px-0">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
