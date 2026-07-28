import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Catalogue from "@/components/pages/Catalogue";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prastuti — Kathak Shades",
  description:
    "Browse Prastuti by Kathak Shades — premium costumes, ghungroos, and accessories for every dancer.",
};

export default function CataloguePage() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <Catalogue />
      </div>
      <Footer />
    </main>
  );
}
