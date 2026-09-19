import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}
