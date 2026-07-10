import Navigation from "@/components/Navigation";
import Hero from "@/components/pages/Hero";
import Footer from "@/components/Footer";
import { MapPin, CalendarDays, Clock, Users, Shirt, BookOpen, Phone } from "lucide-react";
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
      <section className="py-24 bg-brand-cream relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGOEVFIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjAwLCAxNTUsIDYwLCAwLjE1KSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-50 mix-blend-multiply pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-brand-gold"></span>
              <span className="text-brand-gold text-lg">✦</span>
              <span className="h-[1px] w-12 bg-brand-gold"></span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 tracking-wide">
              Our Studio Locations
            </h2>
            <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto font-light">
              Join us at our two beautiful studios and experience the art of Kathak in its purest form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Dombivli Card */}
            <div className="group bg-brand-cream rounded-[16px] border border-brand-gold/40 shadow-[0_4px_20px_rgba(123,74,46,0.08)] hover:shadow-[0_12px_30px_rgba(123,74,46,0.15)] transition-all duration-500 hover:-translate-y-[5px] p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-6 border border-brand-gold/50 shadow-[0_4px_15px_rgba(90,16,35,0.05)] group-hover:scale-[1.08] group-hover:shadow-[0_4px_15px_rgba(200,155,60,0.2)] transition-all duration-300">
                <MapPin className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-maroon mb-2">Dombivli East</h3>
              <p className="font-sans text-brand-gold text-sm uppercase tracking-[0.2em] mb-4">Regency Anantam</p>
              <p className="font-sans text-brand-black/70 text-sm leading-relaxed mb-8">
                Front of Building No. 24 &amp; 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli (East)
              </p>
              <div className="flex flex-col gap-3 mb-8 w-full border-t border-b border-brand-gold/10 py-5">
                <div className="flex items-center justify-center gap-3">
                  <CalendarDays className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  <span className="font-sans text-brand-black/80 font-medium">Monday &amp; Wednesday</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  <span className="font-sans text-brand-black/80 font-medium">7:00 PM – 8:00 PM</span>
                </div>
              </div>
              <a
                href="/classes"
                className="mt-auto bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-8 py-3 rounded-[12px] font-sans font-bold hover:shadow-[0_4px_15px_rgba(200,155,60,0.3)] transition-all text-sm w-full"
              >
                View Class Details
              </a>
            </div>

            {/* Thane Card */}
            <div className="group bg-brand-cream rounded-[16px] border border-brand-gold/40 shadow-[0_4px_20px_rgba(123,74,46,0.08)] hover:shadow-[0_12px_30px_rgba(123,74,46,0.15)] transition-all duration-500 hover:-translate-y-[5px] p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-6 border border-brand-gold/50 shadow-[0_4px_15px_rgba(90,16,35,0.05)] group-hover:scale-[1.08] group-hover:shadow-[0_4px_15px_rgba(200,155,60,0.2)] transition-all duration-300">
                <MapPin className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-maroon mb-2">Thane West</h3>
              <p className="font-sans text-brand-gold text-sm uppercase tracking-[0.2em] mb-4">Vasant Vihar</p>
              <p className="font-sans text-brand-black/70 text-sm leading-relaxed mb-8">
                Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West
              </p>
              <div className="flex flex-col gap-3 mb-8 w-full border-t border-b border-brand-gold/10 py-5">
                <div className="flex items-center justify-center gap-3">
                  <CalendarDays className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  <span className="font-sans text-brand-black/80 font-medium">Tuesday &amp; Thursday</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                  <span className="font-sans text-brand-black/80 font-medium">7:00 PM – 8:00 PM</span>
                </div>
              </div>
              <a
                href="/classes"
                className="mt-auto bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-8 py-3 rounded-[12px] font-sans font-bold hover:shadow-[0_4px_15px_rgba(200,155,60,0.3)] transition-all text-sm w-full"
              >
                View Class Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Sections */}
      <section className="py-24 bg-brand-cream border-t border-brand-gold/20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-brand-gold"></span>
              <span className="text-brand-gold text-lg">✦</span>
              <span className="h-[1px] w-12 bg-brand-gold"></span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 tracking-wide">
              Explore Kathak Shades
            </h2>
            <p className="font-sans text-lg text-brand-black/70 max-w-xl mx-auto font-light">
              Everything you need to start, grow, and deepen your Kathak journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                href: '/classes',
                icon: <Users className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
                title: 'Classes',
                desc: 'Real-time batches at Dombivli & Thane West studios.',
              },
              {
                href: '/catalogue',
                icon: <Shirt className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
                title: 'Catalogue',
                desc: 'Browse premium Kathak costumes, ghungroos & accessories.',
              },
              {
                href: '/books',
                icon: <BookOpen className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
                title: 'Books',
                desc: 'Curated Kathak learning books, taal manuals & music theory.',
              },
              {
                href: '/contact',
                icon: <Phone className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
                title: 'Contact',
                desc: 'Reach us on WhatsApp or visit our studios.',
              },
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                className="bg-brand-cream rounded-[16px] border border-brand-gold/30 p-8 flex flex-col items-center text-center gap-5 group hover:-translate-y-[5px] transition-all duration-500 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_12px_25px_rgba(123,74,46,0.12)]"
              >
                <div className="w-16 h-16 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-cream/5 shadow-inner group-hover:scale-[1.08] transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-maroon">{item.title}</h3>
                <p className="font-sans text-brand-black/70 text-sm leading-relaxed font-light">{item.desc}</p>
                <span className="font-sans text-brand-gold text-sm font-bold mt-auto border-b border-transparent group-hover:border-brand-gold transition-colors pb-0.5">
                  Explore
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
