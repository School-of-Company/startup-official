import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Header } from "@/widgets/header";
import { ApplyForm } from "@/widgets/apply-form";
import { Footer } from "@/widgets/footer";
import { BRAND, isApplicationDeadlinePassed } from "@/shared/config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "지원하기",
  description: `${BRAND} 지원 작성 페이지입니다.`,
};

export default function ApplyPage() {
  if (isApplicationDeadlinePassed()) {
    redirect("/careers");
  }

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
