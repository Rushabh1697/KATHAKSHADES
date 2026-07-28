'use client';

import ScrollReveal from '@/components/ScrollReveal';
import HomeVideo from '@/components/pages/HomeVideo';
import { MapPin, Users, Shirt, BookOpen, Phone, CheckCircle2, GraduationCap, Heart, Music, Star, Trophy } from 'lucide-react';

const whyChooseItems = [
  {
    icon: <Music className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Authentic Tradition',
    desc: 'Training rooted in the classical richness of Kathak, preserving its purity while nurturing artistic expression.',
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Experienced Guru',
    desc: 'Learn under Smt. Amruta Pawan Todankar — 25+ years of Kathak training and 16+ years of dedicated teaching experience.',
  },
  {
    icon: <Trophy className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Proven Track Record',
    desc: 'Students consistently achieve distinctions in Gandharva examinations and excel at national-level cultural events.',
  },
  {
    icon: <Heart className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Holistic Development',
    desc: 'Building discipline, confidence, creativity, and a deep respect for classical art alongside technical mastery.',
  },
  {
    icon: <Star className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Performance Opportunities',
    desc: 'Regular showcases, cultural festivals, and stage productions to build stage presence and artistic confidence.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Supportive Community',
    desc: 'A nurturing environment where students of all ages grow together, guided by personalised mentorship and care.',
  },
];

const exploreItems = [
  {
    href: '/classes',
    icon: <Users className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
    title: 'Classes',
    desc: 'Real-time batches at Dombivli & Thane West classes.',
  },
  {
    href: '/catalogue',
    icon: <Shirt className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
    title: 'Prastuti',
    desc: 'Browse premium Kathak costumes, ghungroos & accessories.',
  },
  {
    href: '/books',
    icon: <BookOpen className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
    title: 'Nritya Store',
    desc: 'Curated Kathak learning books, taal manuals & music theory.',
  },
  {
    href: '/contact',
    icon: <Phone className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />,
    title: 'Contact',
    desc: 'Reach us on WhatsApp or visit our classes.',
  },
];

export default function HomeContent() {
  return (
    <>
      {/* Why Choose Kathak Shades */}
      <section className="py-24 bg-brand-cream relative border-b border-brand-gold/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGOEVFIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjAwLCAxNTUsIDYwLCAwLjE1KSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-50 mix-blend-multiply pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-brand-gold"></span>
                <span className="text-brand-gold text-lg">✦</span>
                <span className="h-[1px] w-12 bg-brand-gold"></span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 tracking-wide">
                Why Choose Kathak Shades
              </h2>
              <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto font-light">
                A commitment to authentic Kathak education, artistic excellence, and nurturing every dancer&rsquo;s unique potential.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal
                key={item.title}
                variant="fadeUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <div
                  className="bg-brand-cream rounded-[14px] border border-brand-gold/30 px-5 py-6 flex flex-col items-center text-center gap-3 group hover:-translate-y-[5px] transition-all duration-500 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_12px_25px_rgba(123,74,46,0.12)] h-full"
                >
                  <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-cream/5 shadow-inner group-hover:scale-[1.08] transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-maroon">{item.title}</h3>
                  <p className="font-sans text-brand-black/70 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-24 bg-brand-cream relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGOEVFIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjAwLCAxNTUsIDYwLCAwLjE1KSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-50 mix-blend-multiply pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Top-Left: Heading block */}
              <ScrollReveal variant="slideLeft" className="md:col-span-1">
                <div className="bg-brand-cream rounded-[16px] border border-brand-gold/40 shadow-[0_4px_20px_rgba(123,74,46,0.08)] p-10 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-gold text-lg">✦</span>
                    <span className="h-[1px] w-12 bg-brand-gold"></span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-6 tracking-wide">
                    Our Classes Locations
                  </h2>
                  <p className="font-sans text-brand-black/70 font-light">
                    Join us at our two beautiful classes and experience the art of Kathak in its purest form.
                  </p>
                </div>
              </ScrollReveal>

              {/* Top-Right: Video block */}
              <ScrollReveal variant="slideRight" delay={0.15} className="md:col-span-2">
                <div className="bg-brand-cream rounded-[16px] border border-brand-gold/40 shadow-[0_4px_20px_rgba(123,74,46,0.08)] overflow-hidden flex items-center justify-center relative min-h-[300px]">
                  <HomeVideo />
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Thane Card */}
              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div className="group bg-brand-cream rounded-[16px] border border-brand-gold/40 shadow-[0_4px_20px_rgba(123,74,46,0.08)] hover:shadow-[0_12px_30px_rgba(123,74,46,0.15)] transition-all duration-500 hover:-translate-y-[5px] p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-6 border border-brand-gold/50 shadow-[0_4px_15px_rgba(90,16,35,0.05)] group-hover:scale-[1.08] group-hover:shadow-[0_4px_15px_rgba(179,92,17,0.2)] transition-all duration-300">
                    <MapPin className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-brand-maroon mb-8">Thane West</h3>
                  <a
                    href="/classes"
                    className="mt-auto bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-8 py-3 rounded-[12px] font-sans font-bold hover:shadow-[0_4px_15px_rgba(179,92,17,0.3)] transition-all text-sm w-full"
                  >
                    View Class Details
                  </a>
                </div>
              </ScrollReveal>

              {/* Dombivli Card */}
              <ScrollReveal variant="fadeUp" delay={0.2}>
                <div className="group bg-brand-cream rounded-[16px] border border-brand-gold/40 shadow-[0_4px_20px_rgba(123,74,46,0.08)] hover:shadow-[0_12px_30px_rgba(123,74,46,0.15)] transition-all duration-500 hover:-translate-y-[5px] p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-6 border border-brand-gold/50 shadow-[0_4px_15px_rgba(90,16,35,0.05)] group-hover:scale-[1.08] group-hover:shadow-[0_4px_15px_rgba(179,92,17,0.2)] transition-all duration-300">
                    <MapPin className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-brand-maroon mb-8">Dombivli East</h3>
                  <a
                    href="/classes"
                    className="mt-auto bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-8 py-3 rounded-[12px] font-sans font-bold hover:shadow-[0_4px_15px_rgba(179,92,17,0.3)] transition-all text-sm w-full"
                  >
                    View Class Details
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Sections */}
      <section className="py-24 bg-brand-cream border-t border-brand-gold/20">
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-brand-gold"></span>
                <span className="text-brand-gold text-lg">✦</span>
                <span className="h-[1px] w-12 bg-brand-gold"></span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 tracking-wide">
                Explore Kathak Shades
              </h2>
              <p className="font-sans text-lg text-brand-black/70 max-w-xl mx-auto font-light">
                Everything you need to start, grow, and deepen your Kathak journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exploreItems.map((item, index) => (
              <ScrollReveal
                key={item.href}
                variant="fadeUp"
                delay={index * 0.1}
                duration={0.5}
              >
                <a
                  href={item.href}
                  className="bg-brand-cream rounded-[16px] border border-brand-gold/30 p-8 flex flex-col items-center text-center gap-5 group hover:-translate-y-[5px] transition-all duration-500 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_12px_25px_rgba(123,74,46,0.12)] h-full"
                >
                  <div className="w-16 h-16 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-cream/5 shadow-inner group-hover:scale-[1.08] transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-maroon">{item.title}</h3>
                  <p className="font-sans text-brand-black/70 text-sm leading-relaxed font-light">{item.desc}</p>
                  <span className="font-sans text-brand-gold text-sm font-bold mt-auto border-b border-transparent group-hover:border-brand-gold transition-colors pb-0.5">
                    Explore
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
