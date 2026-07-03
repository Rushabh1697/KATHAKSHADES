import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Kathak Shades",
  description:
    "Get in touch with Kathak Shades. WhatsApp us or visit our studios in Dombivli East or Thane West.",
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
