import Navigation from "@/components/Navigation";
import Hero from "@/components/pages/Hero";
import { Landmark, CalendarDays, Clock, Users, Shirt, BookOpen, Phone } from "lucide-react";
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
      {/* Location Highlights */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
              Our Studio Locations
            </h2>
            <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
              Join us at our two beautiful studios and experience the art of Kathak in its purest form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dombivli Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-brand-maroon shadow-2xl hover:shadow-brand-gold/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-maroon via-brand-maroon/90 to-brand-black/80" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative p-8">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 border-2 border-brand-gold/40">
                  <Landmark className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-gold mb-2">Dombivli East</h3>
                <p className="font-sans text-brand-gold/60 text-sm uppercase tracking-widest mb-4">Regency Anantam · Kidz Kingdom</p>
                <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-6">
                  Front of Building No. 24 &amp; 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli (East)
                </p>
                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-5 h-5 text-brand-gold" />
                    <span className="font-sans text-brand-cream font-semibold">Monday &amp; Wednesday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-gold" />
                    <span className="font-sans text-brand-cream font-semibold">7:00 PM – 8:00 PM</span>
                  </div>
                </div>
                <a
                  href="/classes"
                  className="inline-block bg-brand-gold text-brand-maroon px-6 py-3 rounded-full font-sans font-bold hover:bg-brand-gold/90 transition-colors text-sm"
                >
                  View Class Details →
                </a>
              </div>
            </div>

            {/* Thane Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a3d5c] via-[#0e4a72] to-[#0a2e45] shadow-2xl hover:shadow-brand-gold/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative p-8">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 border-2 border-brand-gold/40">
                  <Landmark className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-gold mb-2">Thane West</h3>
                <p className="font-sans text-brand-gold/60 text-sm uppercase tracking-widest mb-4">Kinder Hive · Vasant Vihar</p>
                <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-6">
                  Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610
                </p>
                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-5 h-5 text-brand-gold" />
                    <span className="font-sans text-brand-cream font-semibold">Tuesday &amp; Thursday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-gold" />
                    <span className="font-sans text-brand-cream font-semibold">7:00 PM – 8:00 PM</span>
                  </div>
                </div>
                <a
                  href="/classes"
                  className="inline-block bg-brand-gold text-brand-maroon px-6 py-3 rounded-full font-sans font-bold hover:bg-brand-gold/90 transition-colors text-sm"
                >
                  View Class Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Sections */}
      <section className="py-20 bg-brand-cream">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
              Explore Kathak Shades
            </h2>
            <p className="font-sans text-lg text-brand-black/70 max-w-xl mx-auto">
              Everything you need to start, grow, and deepen your Kathak journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: '/classes',
                icon: <Users className="w-10 h-10 text-brand-gold" />,
                title: 'Classes',
                desc: 'Real-time batches at Dombivli & Thane West studios.',
                color: 'bg-brand-maroon',
              },
              {
                href: '/catalogue',
                icon: <Shirt className="w-10 h-10 text-brand-gold" />,
                title: 'Catalogue',
                desc: 'Browse premium Kathak costumes, ghungroos & accessories.',
                color: 'bg-[#7B3F00]',
              },
              {
                href: '/books',
                icon: <BookOpen className="w-10 h-10 text-brand-gold" />,
                title: 'Books',
                desc: 'Curated Kathak learning books, taal manuals & music theory.',
                color: 'bg-[#1a4a3a]',
              },
              {
                href: '/contact',
                icon: <Phone className="w-10 h-10 text-brand-gold" />,
                title: 'Contact',
                desc: 'Reach us on WhatsApp or visit our studios.',
                color: 'bg-[#3d1a5c]',
              },
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`${item.color} rounded-2xl p-7 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div>{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-brand-gold">{item.title}</h3>
                <p className="font-sans text-brand-cream/80 text-sm leading-relaxed">{item.desc}</p>
                <span className="font-sans text-brand-gold text-sm font-bold group-hover:underline mt-auto">
                  Explore →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-maroon text-brand-cream py-10">
        <div className="container text-center">
          <p className="font-serif text-brand-gold text-xl font-bold mb-2">Kathak Shades</p>
          <p className="font-sans text-brand-cream/70 text-sm">
            Amruta Todankar&rsquo;s School of Kathak &mdash; Where tradition dances on.
          </p>
          <p className="font-sans text-brand-cream/50 text-xs mt-4">
            <span className="flex items-center justify-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-gold" /> +91 97736 02766</span> &nbsp;|&nbsp; Dombivli East &amp; Thane West
          </p>
        </div>
      </footer>
    </main>
  );
}
