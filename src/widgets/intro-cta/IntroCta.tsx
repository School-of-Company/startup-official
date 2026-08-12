import { BRAND, GENERATION } from "@/shared/config";
import { Reveal } from "@/shared/ui";

export default function IntroCta() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <div className="relative mx-auto max-w-wide px-6 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-panel bg-cta-gradient px-8 py-16 text-center text-white sm:px-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {GENERATION} {BRAND}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              지금, {BRAND}과 함께
              <br className="hidden sm:block" /> 성장할 준비가 되셨나요?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-white/80 sm:text-lg">
              모집 분야와 지원 절차를 확인하고 지금 지원해보세요.
            </p>
            <a
              href="/recruit"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent transition-[scale] duration-200 ease-out hover:scale-[1.02] active:scale-[0.97]"
            >
              모집 안내 보러가기
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
