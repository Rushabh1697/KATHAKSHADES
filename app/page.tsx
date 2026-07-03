import Hero from "@/components/pages/Hero";
import Classes from "@/components/pages/Classes";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Classes />
      <About />
      <Contact />
    </main>
  );
}
