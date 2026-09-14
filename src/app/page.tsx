import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer style={{ padding: "4rem 2rem", textAlign: "center", borderTop: "1px solid var(--glass-border)" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} FM Studios. Diseñado y desarrollado con pasión.
        </p>
      </footer>
    </main>
  );
}
