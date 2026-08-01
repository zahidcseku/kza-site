import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ribbon } from "./components/Ribbon";
import { Philosophy } from "./components/Philosophy";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav currentPage="home" />
      <main>
        <Hero />
        <Ribbon />
        <Philosophy />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
