import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PERSON, SITE_URL } from "@/lib/site";

// Datos estructurados para que Google asocie el nombre con este sitio
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
      url: SITE_URL,
      jobTitle: "Estudiante de Ciencia de Datos",
      affiliation: { "@type": "CollegeOrUniversity", name: "Universitat Politècnica de València" },
      knowsAbout: ["Ciencia de datos", "Desarrollo fullstack", "Desarrollo de videojuegos"],
      sameAs: [PERSON.linkedin, PERSON.github],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Franco Marquez Acosta · FM Studios",
      author: { "@id": `${SITE_URL}/#person` },
      inLanguage: "es",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
