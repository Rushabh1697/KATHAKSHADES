import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import KathakShades from "@/components/pages/KathakShades";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Kathak Shades — The School of Kathak",
  description:
    "Founded in 2020, Kathak Shades is dedicated to imparting authentic Kathak education through strong technical training, artistic expression, and holistic learning.",
};

export default function KathakShadesPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <KathakShades />
      </div>
      <Footer />
    </main>
  );
}
