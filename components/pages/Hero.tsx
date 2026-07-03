'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><radialGradient id="vignette" cx="50%25" cy="50%25" r="60%25"><stop offset="0%25" style="stop-color:%235C0612;stop-opacity:0" /><stop offset="100%25" style="stop-color:%235C0612;stop-opacity:0.6" /></radialGradient></defs><rect width="1200" height="600" fill="%235C0612"/><circle cx="600" cy="300" r="500" fill="url(%23vignette)"/></svg>')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-maroon/40 via-transparent to-brand-maroon/60" />

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-brand-gold/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-brand-gold/5 rounded-full" />

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto text-center px-4 animate-fade-in">
        <p className="font-sans text-brand-gold/80 text-sm uppercase tracking-[0.3em] mb-4">
          Amruta Todankar&rsquo;s
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brand-gold mb-4 drop-shadow-lg">
          KATHAK SHADES
        </h1>
        <p className="font-sans text-xl sm:text-2xl text-brand-cream mb-3 drop-shadow-md">
          The School of Kathak
        </p>
        <p className="font-serif text-brand-gold/70 italic text-lg mb-12">
          &ldquo;Where tradition dances on&rdquo;
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/classes"
            className="bg-brand-gold text-brand-maroon px-8 sm:px-12 py-4 rounded-full font-sans font-bold text-lg hover:bg-brand-gold/90 transition-all transform hover:scale-105 shadow-2xl"
          >
            View Classes
          </Link>
          <Link
            href="/contact"
            className="border-2 border-brand-gold text-brand-gold px-8 sm:px-12 py-4 rounded-full font-sans font-bold text-lg hover:bg-brand-gold/10 transition-all transform hover:scale-105"
          >
            Book a Trial
          </Link>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent z-10" />
    </section>
  );
}
