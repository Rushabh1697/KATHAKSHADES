import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Books from "@/components/pages/Books";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Books & Resources — Kathak Shades",
  description:
    "Curated Kathak books, taal manuals, and classical dance literature for students at all levels.",
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
