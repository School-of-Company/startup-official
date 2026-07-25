import { SectionGlow, SectionHeading } from "@/shared/ui";

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
      </div>
    </section>
  );
}
