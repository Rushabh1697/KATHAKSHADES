import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Classes from "@/components/pages/Classes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Classes & Batches — Kathak Shades",
  description:
    "Join Kathak classes at Dombivli East (Mon & Wed, 7–8 PM) and Thane West (Tue & Thu, 7–8 PM). Contact us to enroll.",
};

export default function ClassesPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <Classes />
      </div>
      <Footer />
    </main>
  );
}
