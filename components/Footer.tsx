import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

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
              {/* Instagram */}
              <a
                href="https://www.instagram.com/kathak_shades?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-maroon transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@kathak_shades6419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-maroon transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
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

          {/* Classes */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-brand-gold font-bold text-xl mb-6 tracking-wide">Our Classes</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="font-sans font-medium text-brand-gold text-sm flex items-center justify-center md:justify-start gap-2 mb-1">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} /> Thane West — Rhymes N Colours
                </p>
                <p className="font-sans text-brand-cream/70 text-xs leading-relaxed">
                  <a href="https://maps.app.goo.gl/ZWgt2sHgxhBS1K3E7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Manpada, Thane West</a><br />
                  <span className="text-brand-cream/50 mt-1 block">Tue &amp; Fri · 6:00 PM – 8:00 PM</span>
                </p>
              </div>
              <div className="group">
                <p className="font-sans font-medium text-brand-gold text-sm flex items-center justify-center md:justify-start gap-2 mb-1">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} /> Thane West — Kinder Hive
                </p>
                <p className="font-sans text-brand-cream/70 text-xs leading-relaxed">
                  <a href="https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Vasant Vihar, Thane West</a><br />
                  <span className="text-brand-cream/50 mt-1 block">Tue &amp; Thu · 7:00 PM – 8:00 PM</span>
                </p>
              </div>
              <div className="group">
                <p className="font-sans font-medium text-brand-gold text-sm flex items-center justify-center md:justify-start gap-2 mb-1">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} /> Dombivli East — SD Studio
                </p>
                <p className="font-sans text-brand-cream/70 text-xs leading-relaxed">
                  <a href="https://maps.app.goo.gl/YEA5qG25toE9D2gPA" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Regency Anantam Gate 1, Dombivli</a><br />
                  <span className="text-brand-cream/50 mt-1 block">Mon &amp; Wed · 5:00 PM – 8:00 PM</span>
                </p>
              </div>
              <div className="group">
                <p className="font-sans font-medium text-brand-gold text-sm flex items-center justify-center md:justify-start gap-2 mb-1">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} /> Dombivli East — Kidzdom
                </p>
                <p className="font-sans text-brand-cream/70 text-xs leading-relaxed">
                  <a href="https://maps.app.goo.gl/hT3WLafHvm95d2LK6" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Regency Anantam Gate 3, Dombivli</a><br />
                  <span className="text-brand-cream/50 mt-1 block">Mon &amp; Wed · 7:15 PM – 8:00 PM</span>
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
