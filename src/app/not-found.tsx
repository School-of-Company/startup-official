import type { Metadata } from "next";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BackButton, Logo, SectionGlow } from "@/shared/ui";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
          <SectionGlow className="-left-40 -top-40 h-[420px] w-[420px]" />

          <div className="relative mx-auto max-w-content px-6 text-center sm:px-8 lg:px-10">
            <Logo className="mx-auto h-8 w-auto text-fg sm:h-9" />

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
              404
            </p>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              페이지를 찾을 수 없어요
            </h1>
            <p className="mt-4 text-balance text-base leading-relaxed text-muted sm:text-lg">
              주소가 잘못되었거나 이동/삭제된 페이지예요.
            </p>

            <BackButton className="mt-10 inline-block rounded-full bg-linear-to-r from-accent to-accent-soft px-8 py-4 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.98]">
              이전 페이지로 돌아가기
            </BackButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
