import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      {/* Сюда дальше пойдут <Projects />, <About /> и т.д. */}
    </>
  );
}