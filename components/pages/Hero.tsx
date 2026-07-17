'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const logoSrc = 'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783846259/iuajlxf8tsqzwfbrfa6u.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>


      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-brand-maroon/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 via-brand-black/40 to-transparent" />


      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 border-[0.5px] border-brand-gold/20 rounded-full opacity-50 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 rounded-full border border-brand-gold/45 bg-brand-maroon/35 backdrop-blur-sm shadow-[0_0_40px_rgba(179,92,17,0.22)] flex items-center justify-center overflow-hidden">
          <Image
            src={logoSrc}
            alt="Kathak Shades logo"
            width={192}
            height={192}
            className="h-full w-full object-cover scale-[1.42]"
            priority
          />
        </div>
      </div>
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

    </section>
  );
}
