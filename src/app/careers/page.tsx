import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Projects } from "@/widgets/projects";
import { Tracks } from "@/widgets/tracks";
import { Talent } from "@/widgets/talent";
import { Process } from "@/widgets/process";
import { Footer } from "@/widgets/footer";
import { StickyApplyBar } from "@/widgets/sticky-apply-bar";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Tracks />
        <Talent />
        <Process />
        <StickyApplyBar />
      </main>
      <Footer />
    </>
  );
}
