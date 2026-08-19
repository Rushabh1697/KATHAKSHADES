'use client';

import { School, Sparkles, Award, Users } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const FluteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 90 L90 10" strokeWidth="4" />
    <circle cx="70" cy="30" r="2" fill="currentColor"/>
    <circle cx="60" cy="40" r="2" fill="currentColor"/>
    <circle cx="50" cy="50" r="2" fill="currentColor"/>
    <circle cx="40" cy="60" r="2" fill="currentColor"/>
    <circle cx="30" cy="70" r="2" fill="currentColor"/>
    <circle cx="20" cy="80" r="2" fill="currentColor"/>
    <path d="M80 20 Q 95 35 85 45 T 90 60" strokeWidth="1" strokeDasharray="2,2"/>
  </svg>
);

const TablaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 50 C20 80 30 90 40 90 C50 90 55 80 55 50" />
    <ellipse cx="37.5" cy="50" rx="17.5" ry="8" />
    <ellipse cx="37.5" cy="50" rx="8" ry="4" fill="currentColor" fillOpacity="0.2" />
    <path d="M60 55 C60 85 65 90 75 90 C85 90 90 85 90 55" />
    <ellipse cx="75" cy="55" rx="15" ry="6" />
    <ellipse cx="75" cy="55" rx="6" ry="2.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M22 55 L30 88 M30 57 L40 89 M45 57 L48 85 M52 54 L52 75" strokeWidth="1" opacity="0.5" />
    <path d="M62 60 L68 88 M70 61 L75 89 M80 61 L82 88 M87 59 L88 75" strokeWidth="1" opacity="0.5" />
  </svg>
);

const GhungrooIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 50 Q 30 60 50 50 T 90 50" strokeWidth="3" />
    <circle cx="30" cy="65" r="8" />
    <path d="M26 65 H34 M30 65 V73" strokeWidth="1" />
    <path d="M30 55 V57" />
    <circle cx="50" cy="60" r="8" />
    <path d="M46 60 H54 M50 60 V68" strokeWidth="1" />
    <path d="M50 50 V52" />
    <circle cx="70" cy="65" r="8" />
    <path d="M66 65 H74 M70 65 V73" strokeWidth="1" />
    <path d="M70 55 V57" />
  </svg>
);

export default function KathakShades() {
  return (
    <section id="kathak-shades" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <FluteIcon className="absolute top-[5%] left-[5%] w-64 h-64 text-brand-gold -rotate-12" />
        <TablaIcon className="absolute top-[40%] right-[2%] w-72 h-72 text-brand-gold rotate-12 opacity-80" />
        <GhungrooIcon className="absolute bottom-[10%] left-[8%] w-80 h-80 text-brand-gold -rotate-6" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-brand-gold"></span>
                <span className="text-brand-gold text-lg">✦</span>
                <span className="h-[1px] w-12 bg-brand-gold"></span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-2 tracking-wide">
                About Kathak Shades
              </h1>
              <p className="font-sans text-brand-gold text-sm uppercase tracking-[0.2em]">
                The School of Kathak
              </p>
            </div>
          </ScrollReveal>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Founding & Mission */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-8">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                    <School className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  Our Foundation
                </h3>
                <div className="font-sans text-brand-black/70 font-light leading-relaxed pl-16 space-y-4">
                  <p>
                    Founded in 2020, Kathak Shades &ndash; The School of Kathak is dedicated to imparting authentic Kathak education through strong technical training, artistic expression, and holistic learning. The institution focuses on nurturing dancers with discipline, confidence, creativity, and a deep respect for the rich tradition of this classical art form.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Student Achievements */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-8">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                    <Award className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  Student Excellence
                </h3>
                <div className="font-sans text-brand-black/70 font-light leading-relaxed pl-16 space-y-4">
                  <p>
                    The students of Kathak Shades have consistently achieved success in competitions, Gandharva examinations, and various national-level cultural events, reflecting their dedication and the quality of training provided.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Senior Batch */}
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-8">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                    <Users className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  Our Senior Batch
                </h3>
                <div className="font-sans text-brand-black/70 font-light leading-relaxed pl-16 space-y-4">
                  <p>
                    One of the institution&rsquo;s greatest strengths is its senior batch, many of whom have been learning under Smt. Amruta for nearly a decade. Their journey represents years of disciplined practice, personal growth, and dedicated mentorship.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Legacy */}
            <ScrollReveal variant="fadeUp" delay={0.4}>
              <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-8">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                    <Sparkles className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  Our Legacy
                </h3>
                <div className="font-sans text-brand-black/70 font-light leading-relaxed pl-16 space-y-4">
                  <p>
                    Today, Kathak Shades continues to inspire and guide the next generation of Kathak dancers, preserving and celebrating the legacy of this beautiful classical dance form with grace, integrity, dedication, and pride.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal variant="scaleUp" delay={0.45}>
              <div className="pt-6 text-center">
                <Link
                  href="/classes"
                  className="inline-flex justify-center items-center bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-10 py-4 rounded-[12px] font-sans font-bold text-lg hover:shadow-[0_4px_20px_rgba(179,92,17,0.4)] transition-all transform hover:-translate-y-1 hover:scale-[1.02] shadow-md"
                >
                  View Our Classes
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
