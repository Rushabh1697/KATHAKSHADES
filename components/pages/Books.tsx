'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, Info, BookOpen, MessageCircle, GraduationCap } from 'lucide-react';

const fallbackBookPhotos = [
  'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847387/a1m4rc3enk955d6iljja.jpg',
  'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847380/yw00bsbxhloamfqbjikx.jpg',
  'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847380/uog13wlckc1emvjnucwv.jpg',
  'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847366/oksnto6rkscnicygmjx9.jpg',
];

export default function Books() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookPhotos, setBookPhotos] = useState(fallbackBookPhotos);
  const [bookCover, setBookCover] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 150);

    const controller = new AbortController();

    // Fetch book cover photo from Cloudinary tag 'book'
    const loadBookCover = async () => {
      try {
        const response = await fetch('/api/book', { signal: controller.signal });
        if (response.ok) {
          const data: { photos?: string[] } = await response.json();
          if (Array.isArray(data.photos) && data.photos.length > 0) {
            setBookCover(data.photos[0]);
            // Use all book-tagged photos as page content too
            setBookPhotos(data.photos);
          }
        }
      } catch {
        // Keep fallback
      }
    };

    loadBookCover();

    return () => {
      window.clearTimeout(timer);
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
        <div className={`bg-brand-cream rounded-3xl shadow-2xl overflow-hidden border border-brand-maroon/10 transition-all duration-700 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left — Book Visual */}
            <div className="bg-gradient-to-br from-brand-maroon via-[#3d0a0e] to-[#1a0205] flex items-center justify-center p-8 md:p-12 min-h-[460px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full -translate-x-24 -translate-y-24" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full translate-x-32 translate-y-32" />

              <div className="relative z-10 w-full max-w-[26rem]" style={{ perspective: '2200px' }}>
                <div className="relative h-[18rem] md:h-[22rem] transition-all duration-700" style={{ transformStyle: 'preserve-3d', transform: isOpen ? 'scale(1) rotateX(0deg)' : 'scale(0.92) rotateX(8deg)', opacity: isOpen ? 1 : 0 }}>
                  <div className="absolute inset-y-3 left-0 w-1/2 rounded-l-[1.4rem] bg-gradient-to-b from-[#421014] to-[#140305] shadow-[0_18px_50px_rgba(0,0,0,0.35)] border border-black/20" />
                  <div className="absolute inset-y-3 right-0 w-1/2 rounded-r-[1.4rem] bg-[#fdf4e8] shadow-[0_18px_50px_rgba(0,0,0,0.24)] border border-white/60 overflow-hidden" />

                  <div
                    className="absolute inset-y-3 left-0 w-1/2 rounded-l-[1.4rem] bg-gradient-to-br from-[#3c0f13] via-[#241015] to-[#120205] origin-right shadow-[0_18px_50px_rgba(0,0,0,0.38)] border border-black/20 overflow-hidden"
                    style={{
                      transform: `rotateY(${isOpen ? -132 : -176}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                    }}
                  >
                    {/* Book Cover Photo */}
                    {bookCover && (
                      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                        <Image src={bookCover} alt="Book cover" fill className="object-cover" />
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-y-6 right-4 left-[51%] rounded-[1rem] bg-brand-cream/95 border border-brand-gold/20 overflow-hidden shadow-inner">
                    {bookPhotos.map((photo, index) => (
                      <div
                        key={photo}
                        className="absolute inset-0 animate-pageTurn"
                        style={{
                          zIndex: bookPhotos.length - index,
                          animationDelay: `${index * 1.5}s`,
                          animationDuration: '12s',
                        }}
                      >
                        <div className="absolute inset-0 bg-white/95 rounded-[1rem] shadow-[0_8px_28px_rgba(0,0,0,0.12)] overflow-hidden border border-brand-gold/10">
                          <Image src={photo} alt={`Book page ${index + 1}`} fill className="object-cover" />
                          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-brand-cream">
                            <div>
                              <p className="font-serif text-xl font-bold">नृत्यारंभ</p>
                              <p className="font-sans text-[10px] uppercase tracking-[0.25em]">Preview {index + 1}</p>
                            </div>
                            <p className="font-sans text-[10px] font-semibold">Page {index + 1}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="absolute inset-y-0 left-0 w-[1px] bg-brand-gold/20" />
                    <div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-brand-gold/25 shadow-[0_0_12px_rgba(179,92,17,0.35)]" />
                  </div>

                  <div className="absolute left-3 top-4 bottom-4 w-4 rounded-l-[1rem] bg-[#140305] shadow-[inset_-2px_0_0_rgba(255,255,255,0.08)]" />
                </div>

                <div className="mt-6 text-center text-brand-cream/80">
                  <p className="font-serif text-2xl font-bold text-brand-gold">नृत्यारंभ — Foundation Handbook</p>
                  <p className="font-sans text-sm">An interactive preview of our Kathak Foundation Book.</p>
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
