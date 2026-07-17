'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, Info, BookOpen, MessageCircle, GraduationCap } from 'lucide-react';

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
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Kathak Shades Publication
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
            Books &amp; Resources
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
            Our in-house Kathak Foundation Handbook — your perfect companion from the very first step to a strong technique.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-brand-maroon/10 border border-brand-maroon/20 rounded-full px-5 py-2">
            <span className="font-sans text-brand-maroon text-sm font-semibold">
              <Phone className="w-4 h-4 inline-block -mt-0.5" /> To order: <a href="https://wa.me/919773602766" className="text-brand-maroon font-bold underline hover:text-brand-maroon/70">WhatsApp +91 97736 02766</a>
            </span>
          </div>
        </div>

        {/* Book Feature Card */}
        <div className="bg-brand-cream rounded-3xl shadow-2xl overflow-hidden border border-brand-maroon/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left — Book Photo */}
            <div className="bg-gradient-to-br from-brand-maroon via-[#3d0a0e] to-[#1a0205] flex items-center justify-center p-8 md:p-12 min-h-[460px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full -translate-x-24 -translate-y-24" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full translate-x-32 translate-y-32" />

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
            </div>

            {/* Right — Book Details */}
            <div className="p-10 flex flex-col justify-center">
              {/* Hindi title */}
              <h2 className="font-serif text-4xl font-bold text-brand-maroon mb-1" style={{fontFamily: 'serif'}}>
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
                  <p className="font-serif text-3xl font-bold text-brand-gold">₹350</p>
                </div>
                <a
                  href="https://wa.me/919773602766?text=Hi!%20I%20would%20like%20to%20pre-book%20a%20copy%20of%20%22%E0%A4%A8%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A4%82%E0%A4%AD%22%20Foundation%20Handbook%20(3rd%20Edition).%20Price%20%E2%82%B9350."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-maroon text-brand-gold px-7 py-3 rounded-full font-sans font-bold hover:bg-brand-maroon/90 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5 inline-block" /> Book Your Copy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10 p-6 bg-brand-maroon/5 rounded-2xl border border-brand-maroon/10">
          <p className="font-sans text-brand-maroon font-semibold">
            <GraduationCap className="w-5 h-5 inline-block -mt-1 mr-1" /> This handbook is recommended for all enrolled students at Kathak Shades.
            Contact us on WhatsApp to reserve your copy before the 3rd edition sells out!
          </p>
          <a
            href="https://wa.me/919773602766?text=Hi!%20I%20want%20to%20know%20more%20about%20the%20Nrityarambh%20Foundation%20Handbook."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bb5a] transition-colors"
          >
            <span className="flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
