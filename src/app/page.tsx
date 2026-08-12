import { Header } from "@/widgets/header";
import { Slogan } from "@/widgets/slogan";
import { About } from "@/widgets/about";
import { Projects } from "@/widgets/projects";
import { IntroCta } from "@/widgets/intro-cta";
import { Footer } from "@/widgets/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Slogan />
        <About />
        <Projects />
        <IntroCta />
      </main>
      <Footer />
    </>
  );
}
