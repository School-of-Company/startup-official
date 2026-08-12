import type { Metadata } from "next";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Tracks } from "@/widgets/tracks";
import { Talent } from "@/widgets/talent";
import { Process } from "@/widgets/process";
import { StickyApplyBar } from "@/widgets/sticky-apply-bar";
import { Footer } from "@/widgets/footer";
import { BRAND } from "@/shared/config";

export const metadata: Metadata = {
  title: "모집 안내",
  description: `${BRAND} 모집 분야와 지원 절차를 안내합니다.`,
};

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Tracks />
        <Talent />
        <Process />
        <StickyApplyBar />
      </main>
      <Footer />
    </>
  );
}
