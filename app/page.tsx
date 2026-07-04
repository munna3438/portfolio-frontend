import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectShowcase from "@/components/ProjectShowcase";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StatusConsole from "@/components/StatusConsole";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <ProjectShowcase />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <StatusConsole />
    </main>
  );
}
