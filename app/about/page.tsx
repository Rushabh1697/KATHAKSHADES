import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import About from "@/components/pages/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Amruta Todankar — Kathak Shades",
  description:
    "Learn about Amruta Todankar, the founder and head guru of Kathak Shades — a dedicated Kathak dancer with 15+ years of training and teaching experience.",
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </main>
  );
}
