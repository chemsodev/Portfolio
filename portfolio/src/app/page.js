import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="font-[family-name:var(--poppins)]">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <ContactForm />
    </main>
  );
}
