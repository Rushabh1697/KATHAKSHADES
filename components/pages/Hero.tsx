'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><radialGradient id="vignette" cx="50%25" cy="50%25" r="60%25"><stop offset="0%25" style="stop-color:%235C0612;stop-opacity:0" /><stop offset="100%25" style="stop-color:%235C0612;stop-opacity:0.6" /></radialGradient></defs><rect width="1200" height="600" fill="%235C0612"/><circle cx="600" cy="300" r="500" fill="url(%23vignette)"/></svg>')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand-maroon/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 border-[0.5px] border-brand-gold/20 rounded-full opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] border-[0.5px] border-brand-gold/10 rounded-full opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.1] tracking-wide mb-8">
            <span className="text-brand-light block">Where</span>
            <span className="text-brand-gold block my-1">Tradition</span>
            <span className="text-brand-light block">Dances On</span>
          </h1>
          
          <p className="font-sans text-brand-cream/80 text-lg md:text-xl font-light tracking-wide mb-10 max-w-xl">
            Experience the elegance, grace, and heritage of classical Kathak at Amruta Todankar&rsquo;s Kathak Shades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/classes"
              className="inline-flex justify-center items-center bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-10 py-4 rounded-[12px] font-sans font-bold text-lg hover:shadow-[0_4px_20px_rgba(179,92,17,0.4)] transition-all transform hover:-translate-y-1 hover:scale-[1.02] shadow-md"
            >
              View Classes
            </Link>
            <Link
              href="/about"
              className="inline-flex justify-center items-center bg-transparent border border-brand-gold/60 text-brand-gold px-10 py-4 rounded-[12px] font-sans font-bold text-lg hover:bg-brand-gold/10 transition-all transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              About the Guru
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-cream to-transparent z-10 pointer-events-none" />
    </section>
  );
}
