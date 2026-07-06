import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Projects";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
      {/* Сюда дальше пойдут <Projects />, <About /> и т.д. */}
    </>
  );
}