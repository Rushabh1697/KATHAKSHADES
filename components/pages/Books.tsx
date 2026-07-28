'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Info, BookOpen, GraduationCap, Package } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import RazorpayButton from '@/components/RazorpayButton';

const fallbackBookPhoto = 'https://res.cloudinary.com/dnnnouh5x/image/upload/f_auto,q_auto/v1784278292/g5hwqgmgnnwvp0ngypn8.jpg';

export default function Books() {
  const [bookCover, setBookCover] = useState<string>(fallbackBookPhoto);

  useEffect(() => {
    const controller = new AbortController();

    const loadBookCover = async () => {
      try {
        const response = await fetch('/api/book', { signal: controller.signal });
        if (response.ok) {
          const data: { photos?: string[] } = await response.json();
          if (Array.isArray(data.photos) && data.photos.length > 0) {
            setBookCover(data.photos[0]);
          }
        }
      } catch {
        // Keep fallback
      }
    };

    loadBookCover();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section id="books" className="py-20 bg-white min-h-screen">
      <div className="container max-w-5xl mx-auto px-4">

        {/* ─── Header ────────────────────────────────────────────── */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <p className="font-sans text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Nritya Store
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
              Nritya Store
            </h1>
            <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
              Curated resources and accessories for every Kathak student — from our in-house handbook to performance-grade ghungroos.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── Book Feature Card ──────────────────────────────────── */}
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="bg-brand-cream rounded-3xl shadow-2xl overflow-hidden border border-brand-maroon/10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

              {/* Left — Book Photo */}
              <div className="bg-gradient-to-br from-brand-maroon via-[#3d0a0e] to-[#1a0205] flex items-center justify-center p-8 md:p-12 min-h-[460px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full -translate-x-24 -translate-y-24" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full translate-x-32 translate-y-32" />

                <ScrollReveal variant="scaleUp" delay={0.3}>
                  <div className="relative z-10 w-full max-w-[18rem]">
                    <div className="relative w-full aspect-[3/4] rounded-[1.4rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-brand-gold/20">
                      <Image
                        src={bookCover}
                        alt="नृत्यारंभ Foundation Handbook cover"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="mt-6 text-center text-brand-cream/80">
                      <p className="font-serif text-2xl font-bold text-brand-gold">नृत्यारंभ — Foundation Handbook</p>
                      <p className="font-sans text-sm mt-1 text-brand-cream/70">by Kathak Shades</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right — Book Details */}
              <ScrollReveal variant="slideRight" delay={0.2}>
                <div className="p-10 flex flex-col justify-center h-full">
                  {/* Hindi title */}
                  <h2 className="font-serif text-4xl font-bold text-brand-maroon mb-1" style={{ fontFamily: 'serif' }}>
                    नृत्यारंभ...
                  </h2>
                  <p className="font-sans text-brand-black/50 text-sm italic mb-6">
                    &ldquo;...Unfolding the Journey of Kathak&rdquo;
                  </p>

                  {/* Description */}
                  <p className="font-sans text-brand-black/80 text-base leading-relaxed mb-6">
                    From the first step in Kathak to a strong foundation in technique — this book is your <em className="text-brand-maroon font-semibold">perfect companion</em>. A comprehensive Foundation Handbook crafted for every beginner and student of classical Kathak.
                  </p>

                  {/* Edition Status */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <Info className="w-6 h-6 text-red-700" />
                      <div>
                        <p className="font-sans text-red-700 font-bold text-sm">1st &amp; 2nd Editions — Sold Out!</p>
                        <p className="font-sans text-red-500/70 text-xs">Due to overwhelming demand</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                      <BookOpen className="w-6 h-6 text-green-700" />
                      <div>
                        <p className="font-sans text-green-700 font-bold text-sm">3rd Edition — Coming Soon!</p>
                        <p className="font-sans text-green-600/70 text-xs">Pre-book your copy today</p>
                      </div>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="font-sans text-brand-black/50 text-xs uppercase tracking-wider">Price</p>
                      <p className="font-serif text-3xl font-bold text-brand-gold">₹400</p>
                    </div>
                    <RazorpayButton
                      amount={400}
                      productName="नृत्यारंभ Foundation Handbook (3rd Edition)"
                      label="Pre-Book Now"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Ghungroos Product Card ─────────────────────────────── */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="bg-brand-cream rounded-3xl shadow-2xl overflow-hidden border border-brand-maroon/10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

              {/* Left — Ghungroos Photo */}
              <div className="bg-gradient-to-br from-[#1a1205] via-[#3d2c0a] to-brand-maroon flex items-center justify-center p-8 md:p-12 min-h-[400px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full translate-x-24 -translate-y-24" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-x-32 translate-y-32" />

                <ScrollReveal variant="scaleUp" delay={0.3}>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-brand-gold/40">
                      <Image
                        src="/ghungroos.png"
                        alt="Kathak Ghungroos — pair of 50"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-6 font-serif text-2xl font-bold text-brand-gold text-center">
                      Kathak Ghungroos
                    </p>
                    <p className="font-sans text-sm mt-1 text-brand-cream/70 text-center">
                      Performance-Grade • Pair of 50
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right — Ghungroos Details */}
              <ScrollReveal variant="slideRight" delay={0.2}>
                <div className="p-10 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-5 h-5 text-brand-gold" />
                    <span className="font-sans text-brand-gold font-semibold text-sm uppercase tracking-widest">
                      Accessories
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl font-bold text-brand-maroon mb-1">
                    Kathak Ghungroos
                  </h2>
                  <p className="font-sans text-brand-black/50 text-sm italic mb-5">
                    Pair of 50 Bells — Ready to Perform
                  </p>

                  <p className="font-sans text-brand-black/80 text-base leading-relaxed mb-6">
                    Premium-quality Kathak ghungroos with clear resonant tone — ideal for students and performers alike. Each pair contains <strong>50 bells</strong>, hand-strung on durable leather padding for long practice sessions.
                  </p>

                  {/* Stock badge */}
                  <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-8">
                    <Package className="w-5 h-5 text-amber-700 shrink-0" />
                    <div>
                      <p className="font-sans text-amber-800 font-bold text-sm">Limited Stock — 50 Pairs Available</p>
                      <p className="font-sans text-amber-600/80 text-xs">Order now to secure yours</p>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="font-sans text-brand-black/50 text-xs uppercase tracking-wider">Price per Pair</p>
                      <p className="font-serif text-3xl font-bold text-brand-gold">₹1,200</p>
                    </div>
                    <RazorpayButton
                      amount={1200}
                      productName="Kathak Ghungroos (Pair of 50)"
                      label="Buy Now"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Bottom Note ────────────────────────────────────────── */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="text-center mt-4 p-6 bg-brand-maroon/5 rounded-2xl border border-brand-maroon/10">
            <p className="font-sans text-brand-maroon font-semibold">
              <GraduationCap className="w-5 h-5 inline-block -mt-1 mr-1" />
              The handbook is recommended for all enrolled students at Kathak Shades.
              For any queries, feel free to reach out on WhatsApp.
            </p>
            <a
              href="https://wa.me/919773602766?text=Hi!%20I%20want%20to%20know%20more%20about%20the%20Kathak%20Shades%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bb5a] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.571a.75.75 0 0 0 .921.921l5.724-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.743 9.743 0 0 1-4.98-1.367l-.356-.213-3.394.872.887-3.32-.234-.373A9.711 9.711 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
