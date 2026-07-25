import type { Metadata } from "next";
import { Header } from "@/widgets/header";
import { ApplyForm } from "@/widgets/apply-form";
import { Footer } from "@/widgets/footer";
import { BRAND } from "@/shared/config";

export const metadata: Metadata = {
  title: "지원하기",
  description: `${BRAND} 동아리 신입 부원 지원서 작성 페이지입니다.`,
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
