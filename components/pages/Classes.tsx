'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Phone, MapPin, MessageCircle, ClipboardList, GraduationCap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const studios = [
  {
    id: 'thane',
    name: 'Thane West',
    venue: 'Studio branches in Vasant Vihar and Rhymes N Colours',
    address: 'Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610',
    days: 'Every Tuesday & Thursday',
    timing: '7:00 PM – 8:00 PM',
    contacts: [
      { label: 'Kathak Shades', number: '+91 97736 02766' },
      { label: 'Kinder Hive', number: '+91 98851 80738' },
    ],
    branches: [
      {
        name: 'Kinder Hive — Vasant Vihar',
        days: 'Tuesday & Thursday',
        timing: '7:00 PM – 8:00 PM',
        address: 'Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610',
        mapLink: 'https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West',
      },
      {
        name: 'Rhymes N Colours',
        days: 'Tuesday & Friday',
        timing: '6:00 PM – 7:00 PM and 7:00 PM – 8:00 PM',
        address: 'Ground floor, Khewra Cir Marg, near Acme Ozone, Manpada, Thane West',
        mapLink: 'https://maps.app.goo.gl/ZWgt2sHgxhBS1K3E7',
      },
    ],
    mapLink: 'https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West',
    whatsapp: '919773602766',
  },
  {
    id: 'dombivli',
    name: 'Dombivli East',
    venue: 'Kidz Kingdom — Regency Anantam',
    address: 'Front of Building No. 24 & 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli (East)',
    days: 'Every Monday & Wednesday',
    timing: '7:00 PM – 8:00 PM',
    contacts: [
      { label: 'Kathak Shades', number: '+91 97736 02766' },
      { label: 'Kidz Kingdom', number: '+91 96194 42555' },
    ],
    mapLink: 'https://maps.app.goo.gl/hT3WLafHvm95d2LK6',
    whatsapp: '919773602766',
  },
];

function PeacockFeatherArt() {
  return (
    <svg viewBox="0 0 360 820" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#B35C11" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M250 760C200 660 194 548 205 448C216 346 257 248 287 148" strokeWidth="1.8" opacity="0.9" />
        <path d="M238 728C208 638 205 554 214 468C223 379 250 287 274 188" strokeWidth="1.1" opacity="0.75" />
        <path d="M220 686C199 613 198 550 205 482C213 409 232 325 255 235" strokeWidth="1" opacity="0.6" />
        <path d="M262 772C278 716 289 662 291 604" strokeWidth="1.2" opacity="0.7" />
        <path d="M252 520C240 495 228 474 209 454" strokeWidth="1" opacity="0.65" />
        <path d="M258 456C246 431 228 407 204 388" strokeWidth="1" opacity="0.6" />
        <path d="M265 392C252 367 229 344 199 327" strokeWidth="1" opacity="0.55" />
        <path d="M271 326C256 299 232 276 201 259" strokeWidth="1" opacity="0.5" />
        <path d="M278 262C264 238 242 217 214 202" strokeWidth="1" opacity="0.45" />
        <path d="M282 198C271 179 255 161 235 146" strokeWidth="0.9" opacity="0.4" />
        <path d="M286 150C272 132 252 114 226 100" strokeWidth="1.1" opacity="0.45" />
        <ellipse cx="290" cy="132" rx="28" ry="40" strokeWidth="1.4" opacity="0.9" />
        <ellipse cx="290" cy="132" rx="16" ry="24" strokeWidth="1.2" opacity="0.85" />
        <circle cx="290" cy="132" r="8" strokeWidth="1.2" opacity="0.9" />
        <circle cx="290" cy="132" r="3.4" fill="#B35C11" stroke="none" />
        <path d="M176 612C156 602 144 586 137 566" strokeWidth="0.9" opacity="0.45" />
        <path d="M184 548C159 538 143 521 132 498" strokeWidth="0.9" opacity="0.42" />
        <path d="M190 482C162 472 143 454 131 429" strokeWidth="0.9" opacity="0.4" />
        <path d="M198 418C168 407 148 389 135 363" strokeWidth="0.9" opacity="0.38" />
        <path d="M205 354C174 343 152 325 137 300" strokeWidth="0.9" opacity="0.35" />
        <path d="M212 292C181 281 159 262 144 237" strokeWidth="0.9" opacity="0.32" />
        <path d="M220 232C189 220 167 201 151 176" strokeWidth="0.9" opacity="0.3" />
        <path d="M228 178C201 163 181 143 168 118" strokeWidth="0.9" opacity="0.28" />
      </g>
      <g stroke="#B35C11" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
        <path d="M188 676c-24-16-42-34-53-55" strokeWidth="0.9" />
        <path d="M198 642c-22-13-38-29-49-49" strokeWidth="0.9" />
        <path d="M208 606c-21-13-36-28-46-46" strokeWidth="0.9" />
        <path d="M216 570c-20-13-34-27-43-43" strokeWidth="0.9" />
        <path d="M224 534c-19-12-32-25-40-39" strokeWidth="0.9" />
        <path d="M231 499c-18-11-30-22-37-35" strokeWidth="0.9" />
      </g>
    </svg>
  );
}

function RoyalCornerOrnament() {
  return (
    <svg viewBox="0 0 360 360" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#B35C11" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M40 300c42-4 68-20 88-49 11-16 15-35 14-58" strokeWidth="1.5" opacity="0.88" />
        <path d="M58 278c29-5 51-17 68-37 10-12 15-26 15-42" strokeWidth="1.1" opacity="0.72" />
        <path d="M72 252c20-6 36-15 49-30 8-9 13-20 14-33" strokeWidth="1" opacity="0.62" />
        <path d="M96 226c18-2 31-8 43-20 8-8 13-18 15-28" strokeWidth="0.95" opacity="0.58" />
        <path d="M119 206c16 1 29-2 40-11 9-7 16-16 19-27" strokeWidth="0.9" opacity="0.5" />
        <path d="M46 304c18-20 31-40 39-60" strokeWidth="1.2" opacity="0.7" />
        <path d="M74 308c10-24 18-45 23-64" strokeWidth="1" opacity="0.58" />
        <path d="M104 306c6-20 11-37 13-54" strokeWidth="0.9" opacity="0.52" />
        <path d="M130 298c0-18-1-34-4-49" strokeWidth="0.9" opacity="0.44" />
        <path d="M246 48c-42 4-69 20-88 49-11 16-15 35-14 58" strokeWidth="1.5" opacity="0.88" />
        <path d="M228 70c-29 5-51 17-68 37-10 12-15 26-15 42" strokeWidth="1.1" opacity="0.72" />
        <path d="M214 96c-20 6-36 15-49 30-8 9-13 20-14 33" strokeWidth="1" opacity="0.62" />
        <path d="M190 122c-18 2-31 8-43 20-8 8-13 18-15 28" strokeWidth="0.95" opacity="0.58" />
        <path d="M167 142c-16-1-29 2-40 11-9 7-16 16-19 27" strokeWidth="0.9" opacity="0.5" />
        <circle cx="180" cy="180" r="30" strokeWidth="1.2" opacity="0.9" />
        <circle cx="180" cy="180" r="17" strokeWidth="1" opacity="0.82" />
        <circle cx="180" cy="180" r="6" fill="#B35C11" stroke="none" />
        <path d="M180 150c-18-20-41-33-68-39" strokeWidth="1" opacity="0.5" />
        <path d="M180 150c18-20 41-33 68-39" strokeWidth="1" opacity="0.5" />
        <path d="M150 180c-20-18-33-41-39-68" strokeWidth="1" opacity="0.5" />
        <path d="M210 180c20-18 33-41 39-68" strokeWidth="1" opacity="0.5" />
        <path d="M150 180c-20 18-33 41-39 68" strokeWidth="1" opacity="0.5" />
        <path d="M210 180c20 18 33 41 39 68" strokeWidth="1" opacity="0.5" />
        <path d="M180 210c-18 20-41 33-68 39" strokeWidth="1" opacity="0.5" />
        <path d="M180 210c18 20 41 33 68 39" strokeWidth="1" opacity="0.5" />
      </g>
      <g stroke="#B35C11" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4">
        <path d="M20 20h44c24 0 44 20 44 44v12" strokeWidth="1" />
        <path d="M20 20c8 12 14 24 18 36" strokeWidth="1" />
        <path d="M340 20h-44c-24 0-44 20-44 44v12" strokeWidth="1" />
        <path d="M340 20c-8 12-14 24-18 36" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function Classes() {
  const [activeStudio, setActiveStudio] = useState('thane');
  const currentStudio = studios.find(s => s.id === activeStudio)!;
  const isThane = currentStudio.id === 'thane';
  const cardClass = isThane
    ? 'bg-[#033C4A] border border-[#0B6277]/40 shadow-[0_12px_45px_rgba(3,60,74,0.2)]'
    : 'bg-brand-cream border border-brand-gold/40 shadow-[0_10px_40px_rgba(123,74,46,0.08)]';
  const panelClass = isThane
    ? 'bg-white/6 border border-white/10 text-brand-cream/90'
    : 'bg-brand-cream border border-brand-gold/30 text-brand-black/70';
  const headingClass = isThane ? 'text-brand-cream' : 'text-brand-maroon';
  const mutedClass = isThane ? 'text-brand-cream/70' : 'text-brand-black/70';
  const labelClass = isThane ? 'text-brand-gold/90' : 'text-brand-gold';
  const iconClass = isThane ? 'text-brand-gold' : 'text-brand-gold';
  const buttonClass = 'bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black shadow-[0_4px_15px_rgba(179,92,17,0.22)] hover:shadow-[0_8px_25px_rgba(179,92,17,0.3)]';
  const thaneCataloguePhotos = [
    'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847387/a1m4rc3enk955d6iljja.jpg',
    'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847380/yw00bsbxhloamfqbjikx.jpg',
  ];
  const [thaneBookPhotos, setThaneBookPhotos] = useState<string[]>(thaneCataloguePhotos);
  const [bookIsOpen, setBookIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBookIsOpen(true), 800);
    const controller = new AbortController();
    const loadTaggedPhotos = async () => {
      try {
        const response = await fetch('/api/thaneclasses', { signal: controller.signal });
        if (response.ok) {
          const data: { photos?: string[] } = await response.json();
          if (Array.isArray(data.photos) && data.photos.length > 0) {
            setThaneBookPhotos(data.photos);
          }
        }
      } catch {
        // Fallback to default
      }
    };
    loadTaggedPhotos();
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return (
    <section id="classes" className="py-24 bg-brand-cream relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGOEVFIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMTc5LCA5MiwgMTcsIDAuMTUpIj48L3JlY3Q+Cjwvc3ZnPg==')] opacity-50 mix-blend-multiply pointer-events-none" />

      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-72 h-[34rem] pointer-events-none opacity-45 hidden xl:block">
        <PeacockFeatherArt />
      </div>
      <div className="absolute right-0 top-12 translate-x-10 w-72 h-72 pointer-events-none opacity-45 hidden xl:block">
        <RoyalCornerOrnament />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-brand-gold"></span>
            <span className="text-brand-gold text-lg">✦</span>
            <span className="h-[1px] w-12 bg-brand-gold"></span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 tracking-wide">
            Classes &amp; Batches
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto font-light">
            Join our expertly guided Kathak classes at two studio locations. All age groups welcome.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mb-16 justify-center">
          {studios.map(studio => (
            <button
              key={studio.id}
              onClick={() => setActiveStudio(studio.id)}
              className={`px-8 py-3 rounded-full font-sans font-medium transition-all transform hover:-translate-y-1 ${
                activeStudio === studio.id
                  ? 'bg-[#033C4A] text-brand-gold shadow-[0_4px_15px_rgba(3,60,74,0.22)]'
                  : 'bg-transparent text-brand-maroon border border-brand-maroon/30 hover:border-brand-maroon hover:shadow-sm'
              }`}
            >
              {studio.name}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`${cardClass} rounded-[16px] overflow-hidden`}
            >
              <div className={`h-2 w-full ${isThane ? 'bg-gradient-to-r from-[#0A556A] via-[#0B6277] to-[#0E7088]' : 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark'}`} />

              <div className="p-8 md:p-12">
                <div className="mb-12 text-center md:text-left">
                  <p className={`font-sans text-xs uppercase tracking-[0.2em] mb-2 font-semibold ${labelClass}`}>Studio</p>
                  <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-2 ${headingClass}`}>{currentStudio.name}</h2>
                  <p className={`font-sans text-lg font-light ${mutedClass}`}>{currentStudio.venue}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className={`${panelClass} rounded-[12px] p-8 shadow-sm`}>
                      <h3 className={`font-serif text-xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
                        <div className={`w-10 h-10 rounded-full border ${isThane ? 'border-white/20 bg-white/10' : 'border-brand-gold flex items-center justify-center bg-brand-cream/10'}`}>
                          <CalendarDays className={`w-5 h-5 ${iconClass}`} strokeWidth={1.5} />
                        </div>
                        Class Schedule
                      </h3>
                      <div className="space-y-5">
                        <div className="flex flex-col gap-1">
                          <p className={`text-xs uppercase tracking-wider font-semibold ${isThane ? 'text-brand-cream/55' : 'text-brand-black/50'}`}>Class Days</p>
                          <p className={`font-medium text-lg ${headingClass}`}>{currentStudio.days}</p>
                        </div>
                        <div className={`w-full h-[1px] ${isThane ? 'bg-white/10' : 'bg-brand-gold/10'}`} />
                        <div className="flex flex-col gap-1">
                          <p className={`text-xs uppercase tracking-wider font-semibold ${isThane ? 'text-brand-cream/55' : 'text-brand-black/50'}`}>Timing</p>
                          <p className={`font-medium text-lg ${headingClass}`}>{currentStudio.timing}</p>
                        </div>
                      </div>
                    </div>

                    {currentStudio.branches && (
                      <div className={`${panelClass} rounded-[12px] p-8 shadow-sm`}>
                        <h3 className={`font-serif text-xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
                          <div className={`w-10 h-10 rounded-full border ${isThane ? 'border-white/20 bg-white/10' : 'border-brand-gold flex items-center justify-center bg-brand-cream/10'}`}>
                            <MapPin className={`w-5 h-5 ${iconClass}`} strokeWidth={1.5} />
                          </div>
                          Thane Branches
                        </h3>
                        <div className="space-y-4">
                          {currentStudio.branches.map(branch => (
                            <div key={branch.name} className={`${isThane ? 'bg-white/5 border-white/10' : 'bg-brand-cream border-brand-gold/20'} border rounded-[12px] p-4`}> 
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                  <p className={`font-serif font-bold text-lg ${headingClass}`}>{branch.name}</p>
                                  <p className={`text-xs uppercase tracking-wider font-semibold ${isThane ? 'text-brand-cream/55' : 'text-brand-black/45'}`}>{branch.days}</p>
                                </div>
                                <p className={`font-sans text-sm font-semibold ${isThane ? 'text-brand-gold' : 'text-brand-gold'}`}>{branch.timing}</p>
                              </div>
                              <p className={`text-sm leading-relaxed ${mutedClass} mb-3`}>{branch.address}</p>
                              <a
                                href={branch.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 text-sm font-semibold ${isThane ? 'text-brand-gold hover:text-brand-cream' : 'text-brand-gold hover:text-brand-gold-dark'} transition-colors`}
                              >
                                Open map <ChevronRight className="w-4 h-4" strokeWidth={2} />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className={`${panelClass} rounded-[12px] p-8 shadow-sm`}>
                      <h3 className={`font-serif text-xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
                        <div className={`w-10 h-10 rounded-full border ${isThane ? 'border-white/20 bg-white/10' : 'border-brand-gold flex items-center justify-center bg-brand-cream/10'}`}>
                          <Phone className={`w-5 h-5 ${iconClass}`} strokeWidth={1.5} />
                        </div>
                        Contact Numbers
                      </h3>
                      <div className="space-y-4">
                        {currentStudio.contacts.map((c, i) => (
                          <div key={i} className="flex items-center justify-between group gap-4">
                            <p className={`text-sm font-light ${isThane ? 'text-brand-cream/75' : 'text-brand-black/70'}`}>{c.label}</p>
                            <a
                              href={`tel:${c.number.replace(/\s/g, '')}`}
                              className={`font-medium text-sm transition-colors flex items-center gap-1 ${isThane ? 'text-brand-cream group-hover:text-brand-gold' : 'text-brand-maroon group-hover:text-brand-gold'}`}
                            >
                              {c.number} <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 flex flex-col justify-between">
                    {isThane && (
                      <div className={`${panelClass} rounded-[12px] p-8 shadow-sm overflow-hidden`}>
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div>
                            <p className={`font-sans text-xs uppercase tracking-[0.2em] mb-2 font-semibold ${labelClass}`}>Catalogue</p>
                            <h3 className={`font-serif text-xl font-bold ${headingClass}`}>Thane Classes Book</h3>
                          </div>
                          <Link
                            href="/books"
                            className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold border ${isThane ? 'border-brand-gold/50 text-brand-gold' : 'border-brand-gold/40 text-brand-gold'}`}
                          >
                            Open Book
                          </Link>
                        </div>

                        <div className="relative w-full max-w-[26rem] mx-auto p-4 flex items-center justify-center min-h-[260px]" style={{ perspective: '2200px' }}>
                          <div className="relative w-full h-[14rem] sm:h-[16rem] transition-all duration-700" style={{ transformStyle: 'preserve-3d', transform: bookIsOpen ? 'scale(1) rotateX(0deg)' : 'scale(0.92) rotateX(8deg)', opacity: bookIsOpen ? 1 : 0 }}>
                            {/* Left inside cover backing */}
                            <div className="absolute inset-y-3 left-0 w-1/2 rounded-l-[1.4rem] bg-gradient-to-b from-[#421014] to-[#140305] shadow-[0_18px_50px_rgba(0,0,0,0.35)] border border-black/20" />
                            {/* Right page base/shadow */}
                            <div className="absolute inset-y-3 right-0 w-1/2 rounded-r-[1.4rem] bg-[#fdf4e8] shadow-[0_18px_50px_rgba(0,0,0,0.24)] border border-white/60 overflow-hidden" />

                            {/* Outer front cover (opening left) */}
                            <div
                              className="absolute inset-y-3 left-0 w-1/2 rounded-l-[1.4rem] bg-gradient-to-br from-[#3c0f13] via-[#241015] to-[#120205] origin-right shadow-[0_18px_50px_rgba(0,0,0,0.38)] border border-black/20"
                              style={{
                                transform: `rotateY(${bookIsOpen ? -132 : -176}deg)`,
                                transformStyle: 'preserve-3d',
                                transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                              }}
                            />

                            {/* Right Pages Container */}
                            <div className="absolute inset-y-5 right-3 left-[51%] rounded-[1rem] bg-brand-cream/95 border border-brand-gold/20 overflow-hidden shadow-inner">
                              {thaneBookPhotos.map((photo, index) => (
                                <div
                                  key={photo}
                                  className="absolute inset-0 animate-pageTurn"
                                  style={{
                                    zIndex: thaneBookPhotos.length - index,
                                    animationDelay: `${index * 1.5}s`,
                                    animationDuration: '12s',
                                  }}
                                >
                                  <div className="absolute inset-0 bg-white/95 rounded-[1rem] shadow-[0_8px_28px_rgba(0,0,0,0.12)] overflow-hidden border border-brand-gold/10">
                                    <Image src={photo} alt={`Thane class photo ${index + 1}`} fill className="object-cover" />
                                    <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between text-brand-black/90">
                                      <p className="font-serif text-[11px] font-bold">Thane Classes</p>
                                      <p className="font-sans text-[8px] font-semibold">Page {index + 1}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}

                              <div className="absolute inset-y-0 left-0 w-[1px] bg-brand-gold/20" />
                              <div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-brand-gold/25 shadow-[0_0_12px_rgba(179,92,17,0.35)]" />
                            </div>

                            {/* Book Spine Overlay */}
                            <div className="absolute left-3 top-4 bottom-4 w-4 rounded-l-[1rem] bg-[#140305] shadow-[inset_-2px_0_0_rgba(255,255,255,0.08)]" />
                          </div>
                        </div>

                        <p className={`mt-4 text-sm ${mutedClass}`}>
                          Opening and page-turning preview for the Thane classes catalogue.
                        </p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <a
                        href={`https://wa.me/${currentStudio.whatsapp}?text=Hello%20Kathak%20Shades!%20I%20want%20to%20enquire%20about%20${currentStudio.name}%20classes.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-3 py-4 rounded-[12px] font-sans font-bold transition-all transform hover:-translate-y-1 ${buttonClass}`}
                      >
                        <MessageCircle className="w-5 h-5 text-brand-black" strokeWidth={1.5} /> Enquire on WhatsApp
                      </a>
                      <a
                        href="/contact"
                        className={`w-full flex items-center justify-center gap-3 py-4 rounded-[12px] font-sans font-bold transition-all transform hover:-translate-y-1 ${buttonClass}`}
                      >
                        <ClipboardList className="w-5 h-5 text-brand-black" strokeWidth={1.5} /> Fill Enquiry Form
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center p-6 bg-brand-cream rounded-[16px] border border-brand-gold/20 shadow-sm max-w-2xl mx-auto">
            <p className="font-sans text-brand-maroon font-medium">
              <span className="flex items-center justify-center gap-3"><GraduationCap className="w-6 h-6 text-brand-gold flex-shrink-0" strokeWidth={1.5} /> Classes are open for all age groups. Contact us to know the batch that suits you best!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}