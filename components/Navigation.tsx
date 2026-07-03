'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-brand-maroon/95 backdrop-blur-md z-40 shadow-lg">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
            <span className="text-brand-maroon font-serif font-bold text-sm">KS</span>
          </div>
          <span className="text-brand-gold font-serif font-bold text-lg hidden sm:inline">
            Kathak Shades
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-brand-cream hover:text-brand-gold transition-colors font-sans"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('classes')}
            className="text-brand-cream hover:text-brand-gold transition-colors font-sans"
          >
            Classes
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-brand-cream hover:text-brand-gold transition-colors font-sans"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-brand-gold text-brand-maroon px-6 py-2 rounded-full font-sans font-bold hover:bg-brand-gold/90 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-gold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-maroon border-t border-brand-gold/20">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-brand-cream hover:text-brand-gold transition-colors text-left font-sans"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('classes')}
              className="text-brand-cream hover:text-brand-gold transition-colors text-left font-sans"
            >
              Classes
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-brand-cream hover:text-brand-gold transition-colors text-left font-sans"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-full font-sans font-bold hover:bg-brand-gold/90 transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
