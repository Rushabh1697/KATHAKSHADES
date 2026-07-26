import Navigation from "@/components/Navigation";
import Hero from "@/components/pages/Hero";
import Footer from "@/components/Footer";
import HomeContent from "@/components/pages/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kathak Shades — The School of Kathak",
  description:
    "Amruta Todankar's Kathak Shades — Where tradition dances on. Classical Kathak classes in Dombivli East (Regency Anantam) & Thane West (Vasant Vihar).",
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <HomeContent />
      <Footer />
    </main>
  );
}
