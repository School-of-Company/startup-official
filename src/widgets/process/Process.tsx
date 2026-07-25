import { Reveal } from "@/shared/ui";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-16 bg-white pt-24 dark:bg-bg sm:pt-32">
      <div className="relative mx-auto max-w-content px-6 text-center sm:px-8 lg:px-10">
        <Reveal>
          <p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-gray-600 dark:text-muted sm:text-lg">
            정확한 일정은 추후 안내해드리겠습니다. 감사합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
