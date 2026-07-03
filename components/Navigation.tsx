'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Classes' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/books', label: 'Books' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-brand-maroon/95 backdrop-blur-md z-40 shadow-lg">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
            <span className="text-brand-maroon font-serif font-bold text-sm">KS</span>
          </div>
          <span className="text-brand-gold font-serif font-bold text-lg hidden sm:inline">
            Kathak Shades
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.slice(0, -1).map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-brand-gold border-b-2 border-brand-gold pb-0.5'
                  : 'text-brand-cream hover:text-brand-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-gold text-brand-maroon px-6 py-2 rounded-full font-sans font-bold hover:bg-brand-gold/90 transition-colors text-sm"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-gold"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-maroon border-t border-brand-gold/20">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-left py-2 px-2 rounded transition-colors ${
                  pathname === link.href
                    ? 'text-brand-gold font-bold bg-brand-gold/10'
                    : 'text-brand-cream hover:text-brand-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
