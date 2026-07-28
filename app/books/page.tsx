import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Books from "@/components/pages/Books";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nritya Store — Kathak Shades",
  description:
    "Shop Kathak books, ghungroos and accessories. Buy the नृत्यारंभ Foundation Handbook and performance-grade Kathak ghungroos online.",
};

export default function BooksPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <Books />
      </div>
      <Footer />
    </main>
  );
}
