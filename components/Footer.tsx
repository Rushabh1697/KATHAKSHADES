import Link from 'next/link';
import { MapPin, Phone, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-maroon text-brand-cream py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-cream/5 shadow-[0_0_15px_rgba(179,92,17,0.1)]">
                <span className="text-brand-gold font-serif font-bold text-lg">KS</span>
              </div>
              <span className="text-brand-gold font-serif font-bold text-2xl tracking-wide">Kathak Shades</span>
            </div>
            <p className="font-sans text-brand-cream/80 text-sm leading-relaxed max-w-xs">
              Amruta Todankar&rsquo;s School of Kathak &mdash; Where tradition dances on.
            </p>
            <p className="font-sans text-brand-gold/80 text-sm mt-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-gold" strokeWidth={1.5} /> +91 97736 02766
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/kathak_shades?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-maroon transition-all"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/@kathak_shades6419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-maroon transition-all"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-brand-gold font-bold text-xl mb-6 tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/classes', label: 'Classes' },
                { href: '/catalogue', label: 'Catalogue' },
                { href: '/books', label: 'Books' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold hover:translate-x-1 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Studios */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-brand-gold font-bold text-xl mb-6 tracking-wide">Our Studios</h4>
            <div className="space-y-6">
              <div className="group">
                <p className="font-sans font-medium text-brand-gold text-sm flex items-center justify-center md:justify-start gap-2 mb-2">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} /> Dombivli East
                </p>
                <p className="font-sans text-brand-cream/70 text-xs leading-relaxed">
                  <a href="https://maps.app.goo.gl/hT3WLafHvm95d2LK6" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Regency Anantam, Kidz Kingdom</a><br />
                  <span className="text-brand-cream/50 mt-1 block">Mon &amp; Wed · 7:00 PM – 8:00 PM</span>
                </p>
              </div>
              <div className="group">
                <p className="font-sans font-medium text-brand-gold text-sm flex items-center justify-center md:justify-start gap-2 mb-2">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} /> Thane West
                </p>
                <p className="font-sans text-brand-cream/70 text-xs leading-relaxed">
                  <a href="https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Kinder Hive, Vasant Vihar</a><br />
                  <span className="text-brand-cream/50 mt-1 block">Tue &amp; Thu · 7:00 PM – 8:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gold/10 pt-8 text-center flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-brand-gold/30">
            <span>✦</span>
            <span className="text-xs">────────</span>
            <span>✦</span>
          </div>
          <p className="font-sans text-brand-cream/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Kathak Shades by Amruta Todankar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
