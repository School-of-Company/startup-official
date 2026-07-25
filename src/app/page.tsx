import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Projects } from "@/widgets/projects";
import { Tracks } from "@/widgets/tracks";
import { Process } from "@/widgets/process";
import { Footer } from "@/widgets/footer";
import { StickyApplyBar } from "@/widgets/sticky-apply-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Tracks />
        <Process />
        <StickyApplyBar />
      </main>
      <Footer />
    </>
  );
}
