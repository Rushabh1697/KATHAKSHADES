'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { CalendarDays, Phone, MapPin, MessageCircle, ClipboardList, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const studios = [
  {
    id: 'thane',
    name: 'Thane West',
    venue: 'Classes branches in Vasant Vihar and Rhymes N Colours',
    address: 'Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610',
    days: 'Every Tuesday & Thursday',
    timing: '7:00 PM – 8:00 PM',
    contacts: [
      { label: 'Kathak Shades', number: '+91 97736 02766' },
    ],
    branches: [
      {
        name: 'Rhymes N Colours',
        days: 'Tuesday & Friday',
        timing: '6:00 PM – 7:00 PM and 7:00 PM – 8:00 PM',
        address: 'Ground floor, Khewra Cir Marg, near Acme Ozone, Manpada, Thane West',
        mapLink: 'https://maps.app.goo.gl/ZWgt2sHgxhBS1K3E7',
      },
      {
        name: 'Kinder Hive — Vasant Vihar',
        days: 'Tuesday & Thursday',
        timing: '7:00 PM – 8:00 PM',
        address: 'Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610',
        mapLink: 'https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West',
      },
    ],
    mapLink: 'https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West',
    whatsapp: '919773602766',
  },
  {
    id: 'dombivli',
    name: 'Dombivli East',
    venue: 'Classes branches in Kidzdom and SD Studio',
    address: 'Regency Anantam, Dombivli (East)',
    days: 'Every Monday & Wednesday',
    timing: '5:00 PM – 6:00 PM and 7:00 PM – 8:00 PM',
    contacts: [
      { label: 'Kathak Shades', number: '+91 97736 02766' },
    ],
    branches: [
      {
        name: 'SD Studio — Regency Anantam',
        days: 'Monday & Wednesday',
        timing: '5:00 PM – 6:00 PM and 7:00 PM – 8:00 PM',
        address: 'SD Education hub, Regency Anantam gate no 1, Dombivli',
        mapLink: 'https://maps.app.goo.gl/YEA5qG25toE9D2gPA',
      },
      {
        name: 'Kidzdom — Regency Anantam',
        days: 'Monday & Wednesday',
        timing: '7:15 PM – 8:00 PM',
        address: 'Front of Building No. 24 & 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli (East)',
        mapLink: 'https://maps.app.goo.gl/hT3WLafHvm95d2LK6',
      },
    ],
    mapLink: 'https://maps.app.goo.gl/hT3WLafHvm95d2LK6',
    whatsapp: '919773602766',
  },
];

function PeacockFeatherArt() {
  return (
    <svg viewBox="0 0 400 900" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#D5832A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85">
        {/* Main Stem / Quill */}
        <path d="M 220 860 C 180 720 185 550 205 400 C 220 280 250 170 280 60" strokeWidth="3" stroke="#B35C11" />
        
        {/* Intricate Inner Stem details */}
        <path d="M 215 820 C 185 700 190 540 208 400" strokeWidth="1" stroke="#D5832A" opacity="0.5" />
        
        {/* Bottom decorative base flourish */}
        <path d="M 220 860 C 240 880 270 890 290 870 C 310 850 290 820 260 830 C 230 840 210 810 220 790" strokeWidth="1.5" />
        <path d="M 195 850 C 180 870 150 880 130 860 C 110 840 130 810 160 820" strokeWidth="1.2" />

        {/* Outer Feather Eye Structure */}
        <path d="M 280 60 C 220 -20 130 30 150 120 C 160 170 200 210 250 220 C 310 230 360 180 350 110 C 340 50 310 70 280 60 Z" strokeWidth="2.5" stroke="#B35C11" />
        <path d="M 280 60 C 240 0 160 40 175 110 C 185 150 220 180 260 185 C 310 190 335 150 330 100 C 320 60 300 70 280 60 Z" strokeWidth="1.8" />
        
        {/* Styled Eye Center (Teardrop / Lotus inspired) */}
        <path d="M 268 70 C 240 85 220 115 235 145 C 245 165 275 165 285 145 C 300 115 280 85 268 70 Z" fill="#B35C11" fillOpacity="0.15" stroke="#B35C11" strokeWidth="1.5" />
        <circle cx="262" cy="122" r="14" stroke="#D5832A" strokeWidth="1.2" />
        <circle cx="262" cy="122" r="6" fill="#D5832A" />

        {/* High-density detailed strands (Left Side) */}
        <path d="M 203 410 C 140 380 90 350 70 300 C 60 270 80 250 110 270" />
        <path d="M 200 440 C 130 410 80 380 60 320" />
        <path d="M 197 470 C 120 440 70 400 55 340" />
        <path d="M 194 500 C 110 470 60 420 50 360" />
        <path d="M 191 530 C 100 500 50 440 45 380" />
        <path d="M 188 560 C 90 530 45 460 40 400" />
        <path d="M 185 590 C 85 560 40 480 38 420" />
        <path d="M 182 620 C 80 590 38 500 36 440" />
        <path d="M 179 650 C 75 620 36 520 35 460" />
        <path d="M 176 680 C 70 650 35 540 35 480" />
        <path d="M 173 710 C 68 680 35 560 38 500" />
        <path d="M 170 740 C 65 710 38 580 42 520" />
        <path d="M 167 770 C 65 740 42 600 48 540" />

        {/* Delicate Intermediate Strands (Left Side) */}
        <path d="M 201 425 C 150 400 105 370 80 310" strokeWidth="0.8" opacity="0.6" />
        <path d="M 198 455 C 140 430 95 390 70 330" strokeWidth="0.8" opacity="0.6" />
        <path d="M 195 485 C 130 455 85 410 60 350" strokeWidth="0.8" opacity="0.6" />
        <path d="M 192 515 C 120 485 75 430 52 370" strokeWidth="0.8" opacity="0.6" />
        <path d="M 189 545 C 110 515 65 450 48 390" strokeWidth="0.8" opacity="0.6" />
        <path d="M 186 575 C 100 545 55 470 42 410" strokeWidth="0.8" opacity="0.6" />
        <path d="M 183 605 C 92 575 48 490 38 430" strokeWidth="0.8" opacity="0.6" />
        <path d="M 180 635 C 85 605 42 510 36 450" strokeWidth="0.8" opacity="0.6" />
        <path d="M 177 665 C 80 635 38 530 35 470" strokeWidth="0.8" opacity="0.6" />
        <path d="M 174 695 C 75 665 36 550 36 490" strokeWidth="0.8" opacity="0.6" />

        {/* High-density detailed strands (Right Side) */}
        <path d="M 215 380 C 280 370 340 360 370 320 C 390 290 380 260 340 270" />
        <path d="M 218 410 C 290 390 350 370 380 330 C 395 300 385 275 350 285" />
        <path d="M 221 440 C 300 420 365 390 390 340 C 400 310 390 285 360 295" />
        <path d="M 224 470 C 310 445 375 410 395 350" />
        <path d="M 227 500 C 320 470 380 430 398 370" />
        <path d="M 230 530 C 330 495 385 450 399 390" />
        <path d="M 233 560 C 340 520 388 470 399 410" />
        <path d="M 236 590 C 345 545 390 490 398 430" />
        <path d="M 239 620 C 350 570 390 510 396 450" />
        <path d="M 242 650 C 352 595 390 530 392 470" />
        <path d="M 245 680 C 352 620 388 550 388 490" />
        <path d="M 248 710 C 350 645 385 570 382 510" />
        <path d="M 251 740 C 348 670 380 590 376 530" />

        {/* Delicate Intermediate Strands (Right Side) */}
        <path d="M 216 395 C 285 380 345 365 375 325" strokeWidth="0.8" opacity="0.6" />
        <path d="M 219 425 C 295 405 355 380 385 335" strokeWidth="0.8" opacity="0.6" />
        <path d="M 222 455 C 305 432 370 400 392 345" strokeWidth="0.8" opacity="0.6" />
        <path d="M 225 485 C 315 457 377 420 396 360" strokeWidth="0.8" opacity="0.6" />
        <path d="M 228 515 C 325 482 382 440 398 380" strokeWidth="0.8" opacity="0.6" />
        <path d="M 231 545 C 335 507 386 460 399 400" strokeWidth="0.8" opacity="0.6" />
        <path d="M 234 575 C 342 532 389 480 398 420" strokeWidth="0.8" opacity="0.6" />
        <path d="M 237 605 C 347 557 390 500 397 440" strokeWidth="0.8" opacity="0.6" />

        {/* Concentric rings / curves near the eye */}
        <path d="M 210 240 C 170 270 140 320 160 380" strokeWidth="1" stroke="#B35C11" opacity="0.4" />
        <path d="M 290 240 C 330 270 360 320 340 380" strokeWidth="1" stroke="#B35C11" opacity="0.4" />
      </g>
    </svg>
  );
}

function RoyalCornerOrnament() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#D5832A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85">
        {/* Outer Corner Frame Lines */}
        <path d="M 20 20 L 380 20" strokeWidth="1.2" opacity="0.5" />
        <path d="M 20 20 L 20 380" strokeWidth="1.2" opacity="0.5" />
        
        {/* Corner Accent Flourish */}
        <path d="M 40 40 L 120 40 C 100 60 100 80 120 100 C 140 120 160 100 160 80" strokeWidth="1" />
        <path d="M 40 40 L 40 120 C 60 100 80 100 100 120 C 120 140 100 160 80 160" strokeWidth="1" />

        {/* Mughal Floral Scrolls (Upper-Right Flowing) */}
        <path d="M 380 20 C 320 30 260 60 220 110 C 200 135 190 170 195 210" strokeWidth="2.2" stroke="#B35C11" />
        <path d="M 340 20 C 290 35 240 70 205 120 C 190 142 180 170 182 200" strokeWidth="1.2" />
        
        {/* Curling Mughal Leaves & Petals */}
        <path d="M 280 45 C 295 70 310 80 335 75 C 350 70 355 55 340 45 C 320 35 300 40 280 45 Z" fill="#B35C11" fillOpacity="0.08" />
        <path d="M 235 85 C 255 110 275 120 300 110 C 315 105 315 90 300 80 C 280 70 255 75 235 85 Z" />
        <path d="M 205 135 C 220 165 240 175 265 160 C 275 150 270 135 255 130 C 235 120 220 125 205 135 Z" />

        {/* Mughal Floral Scrolls (Lower-Left Flowing) */}
        <path d="M 20 380 C 30 320 60 260 110 220 C 135 200 170 190 210 195" strokeWidth="2.2" stroke="#B35C11" />
        <path d="M 20 340 C 35 290 70 240 120 205 C 142 190 170 180 200 182" strokeWidth="1.2" />

        {/* Curling Mughal Leaves & Petals (Lower-Left) */}
        <path d="M 45 280 C 70 295 80 310 75 335 C 70 350 55 355 45 340 C 35 320 40 300 45 280 Z" fill="#B35C11" fillOpacity="0.08" />
        <path d="M 85 235 C 110 255 120 275 110 300 C 105 315 90 315 80 300 C 70 280 75 255 85 235 Z" />
        <path d="M 135 205 C 165 220 175 240 160 265 C 150 275 135 270 130 255 C 120 235 125 220 135 205 Z" />

        {/* Centered Symmetrical Lotus Mandala / Carving */}
        <circle cx="200" cy="200" r="45" strokeWidth="2" stroke="#B35C11" />
        <circle cx="200" cy="200" r="32" strokeWidth="1.2" />
        <circle cx="200" cy="200" r="12" fill="#B35C11" />
        
        {/* Lotus Petal Rays inside Mandala */}
        <path d="M 200 155 C 190 175 180 180 200 200 C 220 180 210 175 200 155 Z" fill="#D5832A" fillOpacity="0.1" />
        <path d="M 200 245 C 190 225 180 220 200 200 C 220 220 210 225 200 245 Z" fill="#D5832A" fillOpacity="0.1" />
        <path d="M 155 200 C 175 190 180 180 200 200 C 180 220 175 210 155 200 Z" fill="#D5832A" fillOpacity="0.1" />
        <path d="M 245 200 C 225 190 220 180 200 200 C 220 220 225 210 245 200 Z" fill="#D5832A" fillOpacity="0.1" />

        {/* Diagonal corner symmetry details */}
        <path d="M 20 20 L 180 180" strokeWidth="1.2" stroke="#B35C11" strokeDasharray="3 6" opacity="0.4" />
      </g>
    </svg>
  );
}

export default function Classes() {
  const [activeStudio, setActiveStudio] = useState('thane');
  const currentStudio = studios.find(s => s.id === activeStudio)!;
  const isThane = currentStudio.id === 'thane';
  const cardClass = 'bg-[#E8D5C0] border border-brand-gold/50 shadow-[0_12px_45px_rgba(160,110,72,0.18)]';
  const panelClass = 'bg-white/40 border border-brand-gold/25 text-brand-black/90';
  const headingClass = 'text-brand-maroon';
  const mutedClass = 'text-brand-black/70';
  const labelClass = 'text-brand-maroon';
  const iconClass = 'text-brand-maroon';

  // ── GSAP animation refs ────────────────────────────────────────────
  const sectionRef    = useRef<HTMLElement>(null);
  const heroRef       = useRef<HTMLDivElement>(null);
  const buttonsRef    = useRef<HTMLDivElement>(null);
  const mainCardRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Hero — title + subtitle slide up on page load
      const heroEls = heroRef.current
        ? heroRef.current.querySelectorAll('[data-gsap="hero-item"]')
        : [];
      if (heroEls.length) {
        gsap.fromTo(
          heroEls,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.18,
          }
        );
      }

      // 2. Toggle buttons — stagger in just after hero
      const btnEls = buttonsRef.current
        ? buttonsRef.current.querySelectorAll('[data-gsap="toggle-btn"]')
        : [];
      if (btnEls.length) {
        gsap.fromTo(
          btnEls,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.14,
            delay: 0.55,
          }
        );
      }

      // 3. Main card — ScrollTrigger: fade + gentle scale-up
      if (mainCardRef.current) {
        gsap.fromTo(
          mainCardRef.current,
          { opacity: 0, scale: 0.97, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mainCardRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 4. Inner panels — stagger in after card is visible
      const panelEls = mainCardRef.current
        ? mainCardRef.current.querySelectorAll('[data-gsap="panel"]')
        : [];
      if (panelEls.length) {
        gsap.fromTo(
          panelEls,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.13,
            scrollTrigger: {
              trigger: mainCardRef.current,
              start: 'top 78%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  const thaneCataloguePhotos = [
    'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847387/a1m4rc3enk955d6iljja.jpg',
    'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783847380/yw00bsbxhloamfqbjikx.jpg',
  ];
  const dombivliCataloguePhotos = [
    'https://res.cloudinary.com/dnnnouh5x/image/upload/f_auto,q_auto/v1783862457/ku47mhfvgpjuhbqqkxfy.jpg',
    'https://res.cloudinary.com/dnnnouh5x/image/upload/f_auto,q_auto/v1783862455/ieceaztoludztzb3xsng.jpg',
    'https://res.cloudinary.com/dnnnouh5x/image/upload/f_auto,q_auto/v1783862455/dwapjhozmjvmfrwvotb8.jpg',
    'https://res.cloudinary.com/dnnnouh5x/image/upload/f_auto,q_auto/v1783862451/apfmggbmpftwnqmab7jm.jpg',
    'https://res.cloudinary.com/dnnnouh5x/image/upload/f_auto,q_auto/v1783862451/cylztldboaxrfikelche.jpg',
  ];
  const [thaneBookPhotos, setThaneBookPhotos] = useState<string[]>(thaneCataloguePhotos);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const goToNextCard = useCallback(() => {
    setActiveCardIndex(prev => (prev + 1) % thaneBookPhotos.length);
  }, [thaneBookPhotos.length]);

  const goToPrevCard = useCallback(() => {
    setActiveCardIndex(prev => (prev - 1 + thaneBookPhotos.length) % thaneBookPhotos.length);
  }, [thaneBookPhotos.length]);

  useEffect(() => {
    const controller = new AbortController();
    const loadTaggedPhotos = async () => {
      try {
        const response = await fetch('/api/thaneclasses', { signal: controller.signal });
        if (response.ok) {
          const data: { photos?: string[] } = await response.json();
          if (Array.isArray(data.photos) && data.photos.length > 0) {
            setThaneBookPhotos(data.photos);
            setActiveCardIndex(0);
          }
        }
      } catch {
        // Fallback to default
      }
    };
    loadTaggedPhotos();
    return () => {
      controller.abort();
    };
  }, []);

  // Auto-advance Thane cards every 5 seconds
  useEffect(() => {
    if (thaneBookPhotos.length <= 1) return;
    const interval = setInterval(goToNextCard, 5000);
    return () => clearInterval(interval);
  }, [goToNextCard, thaneBookPhotos.length]);

  // --- Dombivli photo carousel state ---
  const [dombivliPhotos, setDombivliPhotos] = useState<string[]>(dombivliCataloguePhotos);
  const [dombivliCardIndex, setDombivliCardIndex] = useState(0);

  const goToNextDombivliCard = useCallback(() => {
    setDombivliCardIndex(prev => (prev + 1) % (dombivliPhotos.length || 1));
  }, [dombivliPhotos.length]);

  const goToPrevDombivliCard = useCallback(() => {
    setDombivliCardIndex(prev => (prev - 1 + (dombivliPhotos.length || 1)) % (dombivliPhotos.length || 1));
  }, [dombivliPhotos.length]);

  useEffect(() => {
    const controller = new AbortController();
    const loadDombivliPhotos = async () => {
      try {
        const response = await fetch('/api/dombivliclasses', { signal: controller.signal });
        if (response.ok) {
          const data: { photos?: string[] } = await response.json();
          if (Array.isArray(data.photos) && data.photos.length > 0) {
            setDombivliPhotos(data.photos);
            setDombivliCardIndex(0);
          }
        }
      } catch {
        // Fallback
      }
    };
    loadDombivliPhotos();
    return () => { controller.abort(); };
  }, []);

  // Auto-advance Dombivli cards every 5 seconds
  useEffect(() => {
    if (dombivliPhotos.length <= 1) return;
    const interval = setInterval(goToNextDombivliCard, 5000);
    return () => clearInterval(interval);
  }, [goToNextDombivliCard, dombivliPhotos.length]);



  return (
    <section ref={sectionRef} id="classes" className="py-24 bg-brand-cream relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGOEVFIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMTc5LCA5MiwgMTcsIDAuMTUpIj48L3JlY3Q+Cjwvc3ZnPg==')] opacity-50 mix-blend-multiply pointer-events-none" />

      {/* Enlarged decorative backgrounds on left & right */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-[24rem] h-[54rem] pointer-events-none opacity-50 hidden xl:block z-0">
        <PeacockFeatherArt />
      </div>
      <div className="absolute right-0 top-12 translate-x-12 w-[24rem] h-[24rem] pointer-events-none opacity-50 hidden xl:block z-0">
        <RoyalCornerOrnament />
      </div>

      <div className="container relative z-10">
        <div ref={heroRef} className="text-center mb-16">
          <div data-gsap="hero-item" className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-brand-gold"></span>
            <span className="text-brand-gold text-lg">✦</span>
            <span className="h-[1px] w-12 bg-brand-gold"></span>
          </div>
          <h1 data-gsap="hero-item" className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 tracking-wide">
            Classes &amp; Batches
          </h1>
          <p data-gsap="hero-item" className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto font-light">
            Join our expertly guided Kathak classes at two classes locations. All age groups welcome.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-wrap gap-6 mb-16 justify-center">
          {studios.map(studio => (
            <button
              data-gsap="toggle-btn"
              key={studio.id}
              onClick={() => setActiveStudio(studio.id)}
              className={`px-8 py-3 rounded-full font-sans font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                activeStudio === studio.id
                  ? 'bg-[#AA7B27] text-white shadow-[0_4px_18px_rgba(170,123,39,0.35)]'
                  : 'bg-transparent text-brand-gold border border-brand-gold/60 hover:border-brand-gold hover:bg-brand-gold/8 hover:shadow-sm'
              }`}
            >
              {studio.name}
            </button>
          ))}
        </div>

        <div ref={mainCardRef} className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`${cardClass} rounded-[16px] overflow-hidden relative`}
            >

              <div className="bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark h-2 w-full relative z-[2]" />

              <div className="p-8 md:p-12 relative z-[2]">
                <div className="mb-8 text-center md:text-left">
                  <p className={`font-sans text-xs uppercase tracking-[0.2em] mb-2 font-semibold ${labelClass}`}>Branch</p>
                  <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-2 ${headingClass}`}>{currentStudio.name}</h2>
                  <p className={`font-sans text-lg font-light ${mutedClass}`}>{currentStudio.venue}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div data-gsap="panel" className={`${panelClass} rounded-[12px] p-8 shadow-sm`}>
                      <h3 className={`font-serif text-xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
                        <div className="w-10 h-10 rounded-full border border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center">
                          <CalendarDays className={`w-5 h-5 ${iconClass}`} strokeWidth={1.5} />
                        </div>
                        Class Schedule
                      </h3>
                      <div className="space-y-5">
                        <div className="flex flex-col gap-1">
                          <p className="text-xs uppercase tracking-wider font-semibold text-brand-black/50">Class Days</p>
                          <p className={`font-medium text-lg ${headingClass}`}>{currentStudio.days}</p>
                        </div>
                        <div className="w-full h-[1px] bg-brand-gold/15" />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs uppercase tracking-wider font-semibold text-brand-black/50">Timing</p>
                          <p className={`font-medium text-lg ${headingClass}`}>{currentStudio.timing}</p>
                        </div>
                      </div>
                    </div>

                    {currentStudio.branches && (
                      <div data-gsap="panel" className={`${panelClass} rounded-[12px] p-8 shadow-sm`}>
                        <h3 className={`font-serif text-xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
                          <div className="w-10 h-10 rounded-full border border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center">
                            <MapPin className={`w-5 h-5 ${iconClass}`} strokeWidth={1.5} />
                          </div>
                          {currentStudio.name} Branches
                        </h3>
                        <div className="space-y-4">
                          {currentStudio.branches.map(branch => (
                            <div key={branch.name} className="bg-brand-cream/50 border border-brand-gold/20 rounded-[12px] p-4">
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                  <p className={`font-serif font-bold text-lg ${headingClass}`}>{branch.name}</p>
                                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-black/45">{branch.days}</p>
                                </div>
                                <p className="font-sans text-sm font-semibold text-brand-gold">{branch.timing}</p>
                              </div>
                              <p className={`text-sm leading-relaxed ${mutedClass} mb-3`}>{branch.address}</p>
                              <a
                                href={branch.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors"
                              >
                                Open map <ChevronRight className="w-4 h-4" strokeWidth={2} />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div data-gsap="panel" className={`${panelClass} rounded-[12px] p-8 shadow-sm`}>
                      <h3 className={`font-serif text-xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
                        <div className="w-10 h-10 rounded-full border border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center">
                          <Phone className={`w-5 h-5 ${iconClass}`} strokeWidth={1.5} />
                        </div>
                        Contact Numbers
                      </h3>
                      <div className="space-y-4">
                        {currentStudio.contacts.map((c, i) => (
                          <div key={i} className="flex items-center justify-between group gap-4">
                            <p className="text-sm font-light text-brand-black/70">{c.label}</p>
                            <a
                              href={`tel:${c.number.replace(/\s/g, '')}`}
                              className="font-medium text-sm transition-colors flex items-center gap-1 text-brand-maroon group-hover:text-brand-gold"
                            >
                              {c.number} <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 flex flex-col justify-between">
                    {/* === Photo Card Carousel (shared: Thane + Dombivli) === */}
                    {(() => {
                      const photos = isThane ? thaneBookPhotos : dombivliPhotos;
                      const idx = isThane ? activeCardIndex : dombivliCardIndex;
                      const setIdx = isThane ? setActiveCardIndex : setDombivliCardIndex;
                      const prev = isThane ? goToPrevCard : goToPrevDombivliCard;
                      const next = isThane ? goToNextCard : goToNextDombivliCard;
                      const title = isThane ? 'Thane Classes' : 'Dombivli Classes';

                      if (photos.length === 0 && !isThane) return null;
                      if (photos.length === 0) return null;

                      return (
                        <div data-gsap="panel" className={`${panelClass} rounded-[12px] p-6 sm:p-8 shadow-sm overflow-hidden`}>
                          <div className="flex items-start justify-between gap-4 mb-6">
                            <div>
                              <p className={`font-sans text-xs uppercase tracking-[0.2em] mb-2 font-semibold ${labelClass}`}>Gallery</p>
                              <h3 className={`font-serif text-xl font-bold ${headingClass}`}>{title}</h3>
                            </div>
                            <div className="px-3 py-1 rounded-full text-[11px] font-semibold border border-brand-gold/40 text-brand-gold bg-brand-cream/20">
                              {idx + 1} / {photos.length}
                            </div>
                          </div>

                          {/* Photo Card */}
                          <div className="relative w-full">
                            <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 1.05 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                                  className="absolute inset-0"
                                >
                                  <Image
                                    src={photos[idx]}
                                    alt={`${title} photo ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
                                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                    <div>
                                      <p className="font-serif text-white text-lg font-bold drop-shadow-lg">{title}</p>
                                      <p className="font-sans text-white/70 text-xs">Kathak Shades Classes</p>
                                    </div>
                                  </div>
                                </motion.div>
                              </AnimatePresence>

                              {/* Navigation Arrows */}
                              {photos.length > 1 && (
                                <>
                                  <button
                                    onClick={prev}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-all hover:scale-110 shadow-lg"
                                    aria-label="Previous photo"
                                  >
                                    <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                                  </button>
                                  <button
                                    onClick={next}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-all hover:scale-110 shadow-lg"
                                    aria-label="Next photo"
                                  >
                                    <ChevronRight className="w-5 h-5" strokeWidth={2} />
                                  </button>
                                </>
                              )}
                            </div>

                            {/* Dot Indicators */}
                            {photos.length > 1 && (
                              <div className="flex items-center justify-center gap-2 mt-4">
                                {photos.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setIdx(index)}
                                    className={`rounded-full transition-all duration-300 ${
                                      index === idx
                                        ? 'w-6 h-2 bg-brand-gold'
                                        : `w-2 h-2 ${isThane ? 'bg-brand-gold/30 hover:bg-brand-gold/50' : 'bg-brand-gold/30 hover:bg-brand-gold/50'}`
                                    }`}
                                    aria-label={`Go to photo ${index + 1}`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>


                        </div>
                      );
                    })()}



                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="font-sans text-brand-maroon font-medium mb-6">
              <span className="flex items-center justify-center gap-3"><GraduationCap className="w-6 h-6 text-brand-gold flex-shrink-0" strokeWidth={1.5} /> Classes are open for all age groups. Contact us to know the batch that suits you best!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${studios[0].whatsapp}?text=Hello%20Kathak%20Shades!%20I%20want%20to%20enquire%20about%20classes.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-brand-maroon text-brand-gold px-8 py-4 rounded-[12px] font-sans font-bold shadow-lg hover:bg-brand-maroon/90 transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} /> Enquire on WhatsApp
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center gap-3 bg-brand-maroon text-brand-gold px-8 py-4 rounded-[12px] font-sans font-bold shadow-lg hover:bg-brand-maroon/90 transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                <ClipboardList className="w-5 h-5" strokeWidth={1.5} /> Fill Enquiry Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}