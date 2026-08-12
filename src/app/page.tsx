import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Projects } from "@/widgets/projects";
import { Footer } from "@/widgets/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
