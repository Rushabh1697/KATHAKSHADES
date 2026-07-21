'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star, GraduationCap, Sparkles, Calendar, ChevronLeft, ChevronRight, MessageCircle, ImageOff } from 'lucide-react';

interface Category {
  label: string;
  tag: string;
  apiRoute: string;
  icon: React.ReactNode;
  accentColor: string;
}

const categories: Category[] = [
  {
    label: 'Samarpan',
    tag: 'samarpan',
    apiRoute: '/api/samarpan',
    icon: <Star className="w-6 h-6" />,
    accentColor: 'text-brand-gold',
  },
  {
    label: 'Workshops',
    tag: 'workshops',
    apiRoute: '/api/workshops',
    icon: <GraduationCap className="w-6 h-6" />,
    accentColor: 'text-brand-gold',
  },
  {
    label: 'Performances',
    tag: 'performances',
    apiRoute: '/api/performances',
    icon: <Sparkles className="w-6 h-6" />,
    accentColor: 'text-brand-maroon',
  },
  {
    label: 'Special Occasions',
    tag: 'specialoccasions',
    apiRoute: '/api/specialoccasions',
    icon: <Calendar className="w-6 h-6" />,
    accentColor: 'text-brand-brown',
  },
];

function PhotoScrollRow({ category }: { category: Category }) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    fetch(category.apiRoute)
      .then((r) => r.json())
      .then((data: { photos?: string[] }) => {
        if (Array.isArray(data.photos)) setPhotos(data.photos);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [category.apiRoute]);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <div className="mb-20">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`flex items-center justify-center w-11 h-11 rounded-full border-2 border-brand-gold/40 bg-brand-cream shadow-sm ${category.accentColor}`}>
          {category.icon}
        </div>
        <div>
          <h2 className="font-serif text-3xl font-bold text-brand-maroon">{category.label}</h2>
          <div className="h-1 w-14 bg-brand-gold rounded mt-1" />
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex gap-5 overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 h-52 rounded-2xl bg-brand-maroon/10 animate-pulse" />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && photos.length === 0 && (
        <div className="flex items-center gap-4 p-8 rounded-2xl border border-brand-gold/20 bg-white/60 text-brand-black/50">
          <ImageOff className="w-8 h-8 text-brand-gold/40 flex-shrink-0" />
          <div>
            <p className="font-serif text-lg font-semibold text-brand-maroon/60">No photos yet</p>
            <p className="font-sans text-sm">Photos tagged <code className="bg-brand-gold/10 px-1 rounded text-brand-maroon font-mono">{category.tag}</code> on Cloudinary will appear here automatically.</p>
          </div>
        </div>
      )}

      {/* Photo scroll strip */}
      {!loading && photos.length > 0 && (
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((src, idx) => (
              <div
                key={src + idx}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-brand-maroon/10 bg-white"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${category.label} photo ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3 mt-5">
            <button
              onClick={() => scroll('left')}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-maroon text-brand-gold border border-brand-gold/20 shadow hover:bg-brand-maroon/90 hover:shadow-md transition-all hover:scale-110 active:scale-95"
              aria-label={`Scroll ${category.label} left`}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-maroon text-brand-gold border border-brand-gold/20 shadow hover:bg-brand-maroon/90 hover:shadow-md transition-all hover:scale-110 active:scale-95"
              aria-label={`Scroll ${category.label} right`}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
            <span className="font-sans text-sm text-brand-black/40 ml-1">{photos.length} photo{photos.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Catalogue() {
  return (
    <section id="catalogue" className="py-20 bg-brand-cream min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Kathak Shades
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
            Events &amp; Gallery
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
            A glimpse into the vibrant world of Kathak Shades — our Samarpan productions, workshops, performances, and special celebrations.
          </p>
        </div>

        {/* Dynamic photo rows per category */}
        {categories.map((cat) => (
          <PhotoScrollRow key={cat.tag} category={cat} />
        ))}

        {/* Share CTA */}
        <div className="text-center bg-brand-maroon rounded-2xl p-8 mt-4">
          <p className="font-serif text-2xl font-bold text-brand-gold mb-3">Want to Share Your Moment?</p>
          <p className="font-sans text-brand-cream/80 max-w-lg mx-auto mb-5">
            If you have photos or videos from a Kathak Shades event, we&rsquo;d love to feature them here!
            Reach out to us on WhatsApp.
          </p>
          <a
            href="https://wa.me/919773602766?text=Hi!%20I%20have%20photos%20from%20a%20Kathak%20Shades%20event%20I%27d%20like%20to%20share."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-brand-maroon px-8 py-3 rounded-full font-bold hover:bg-brand-gold/90 transition-colors"
          >
            <span className="flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Share on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
