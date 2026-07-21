'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Classes' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/books', label: 'Books' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const logoSrc = 'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783846259/iuajlxf8tsqzwfbrfa6u.jpg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 w-full z-40 border-b border-brand-gold/10 bg-brand-maroon shadow-[0_10px_30px_rgba(46,26,18,0.18)]"
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center overflow-hidden shadow-[0_4px_12px_rgba(179,92,17,0.25)]">
            {!logoError ? (
              <Image
                src={logoSrc}
                alt="Kathak Shades logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <span className="text-brand-maroon font-serif font-bold text-sm">KS</span>
            )}
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-brand-gold font-serif font-bold text-2xl tracking-wide">
              Kathak Shades
            </span>
            <span className="text-brand-gold/70 font-sans text-[10px] tracking-[0.18em] uppercase">
              The School Of Kathak
            </span>
          </div>
        </Link>

        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.slice(0, -1).map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-sans text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-brand-gold'
                  : 'text-brand-cream hover:text-brand-gold'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-brand-gold"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA (Right) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-6 py-2.5 rounded-[12px] font-sans font-bold hover:shadow-[0_4px_15px_rgba(179,92,17,0.3)] transition-all transform hover:-translate-y-0.5 hover:brightness-110 text-sm shadow-sm"
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
