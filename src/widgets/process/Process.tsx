import { Reveal, SectionGlow, SectionHeading } from "@/shared/ui";
import { SCHEDULE } from "@/shared/config";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      <SectionGlow className="-bottom-32 -left-32 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Process"
          title="모집 절차"
          description="정확한 일정은 추후 안내해드리겠습니다. 감사합니다."
        />

        <Reveal className="mx-auto max-w-2xl">
          <div className="h-full rounded-card bg-surface p-8">
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-wide text-muted">
              일정
            </h3>
            <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
              {SCHEDULE.map((step, i) => (
                <li key={step.label} className="relative">
                  <span className="absolute left-[-33px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg text-[10px] font-bold text-accent-soft">
                    {i + 1}
                  </span>
                  <p className="text-base font-semibold">{step.label}</p>
                  <p className="mt-2 text-sm text-muted">{step.date}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
