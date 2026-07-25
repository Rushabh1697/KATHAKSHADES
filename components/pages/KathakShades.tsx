'use client';

import { School, Sparkles, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function KathakShades() {
  return (
    <section id="kathak-shades" className="py-24 bg-brand-cream relative">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
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

          {/* Main Content */}
          <div className="space-y-8">
            {/* Founding & Mission */}
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

            {/* Student Achievements */}
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

            {/* Senior Batch */}
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

            {/* Legacy */}
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

            {/* CTA */}
            <div className="pt-6 text-center">
              <Link
                href="/classes"
                className="inline-flex justify-center items-center bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-10 py-4 rounded-[12px] font-sans font-bold text-lg hover:shadow-[0_4px_20px_rgba(179,92,17,0.4)] transition-all transform hover:-translate-y-1 hover:scale-[1.02] shadow-md"
              >
                View Our Classes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
