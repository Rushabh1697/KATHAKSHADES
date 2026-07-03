import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-maroon text-brand-cream py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                <span className="text-brand-maroon font-serif font-bold text-sm">KS</span>
              </div>
              <span className="text-brand-gold font-serif font-bold text-xl">Kathak Shades</span>
            </div>
            <p className="font-sans text-brand-cream/70 text-sm leading-relaxed">
              Amruta Todankar&rsquo;s School of Kathak &mdash; Where tradition dances on.
            </p>
            <p className="font-sans text-brand-cream/60 text-xs mt-3">
              📞 +91 97736 02766
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-brand-gold font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
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
                  className="font-sans text-sm text-brand-cream/70 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Studios */}
          <div>
            <h4 className="font-serif text-brand-gold font-bold text-lg mb-4">Our Studios</h4>
            <div className="space-y-4">
              <div>
                <p className="font-sans font-semibold text-brand-cream text-sm">🏛️ Dombivli East</p>
                <p className="font-sans text-brand-cream/60 text-xs leading-relaxed mt-1">
                  Regency Anantam, Kidz Kingdom<br />
                  Mon &amp; Wed · 7:00 PM – 8:00 PM
                </p>
              </div>
              <div>
                <p className="font-sans font-semibold text-brand-cream text-sm">🏛️ Thane West</p>
                <p className="font-sans text-brand-cream/60 text-xs leading-relaxed mt-1">
                  Kinder Hive, Vasant Vihar<br />
                  Tue &amp; Thu · 7:00 PM – 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 pt-6 text-center">
          <p className="font-sans text-brand-cream/50 text-xs">
            &copy; {new Date().getFullYear()} Kathak Shades by Amruta Todankar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
