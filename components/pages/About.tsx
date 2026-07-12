'use client';

import Image from 'next/image';
import { useState } from 'react';
import { User, GraduationCap, Award, Sparkles } from 'lucide-react';
import Link from 'next/link';

const guruPhotoSrc = 'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783846646/g766uhiacofbd8m0pcxx.jpg';

export default function About() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about" className="py-24 bg-brand-cream relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Portrait Placeholder */}
          <div className="flex justify-center group">
            <div className="relative w-full max-w-md aspect-[4/5] bg-brand-maroon rounded-[18px] overflow-hidden shadow-[0_10px_40px_rgba(74,15,29,0.2)] transition-all duration-700 hover:shadow-[0_15px_50px_rgba(179,92,17,0.25)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 to-brand-black/80 z-10" />
              
              <div className="absolute inset-0 bg-brand-maroon/40 backdrop-blur-sm z-0 group-hover:scale-105 transition-transform duration-700">
                {!photoError ? (
                  <Image
                    src={guruPhotoSrc}
                    alt="Amruta Todankar"
                    fill
                    priority
                    className="object-cover object-center"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-maroon/35">
                    <div className="text-center z-20">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full border border-brand-gold flex items-center justify-center bg-brand-maroon/50 shadow-inner">
                          <User className="w-10 h-10 text-brand-gold" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Gold border accent */}
              <div className="absolute inset-4 border-[0.5px] border-brand-gold/40 rounded-[10px] z-20 pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 z-20">
                <p className="text-brand-gold font-serif font-bold text-3xl mb-1 drop-shadow-md">
                  Amruta Todankar
                </p>
                <p className="text-brand-cream/90 font-sans font-light tracking-widest text-sm uppercase">
                  Head Guru
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Biography */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <span className="h-[1px] w-12 bg-brand-gold"></span>
                <span className="text-brand-gold text-lg">✦</span>
                <span className="h-[1px] w-12 bg-brand-gold"></span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-2 tracking-wide">
                About the Guru
              </h2>
              <p className="font-sans text-brand-gold text-sm uppercase tracking-[0.2em]">
                A Journey of Dedication
              </p>
            </div>

            <div className="space-y-5">
              <p className="font-sans text-lg text-brand-black/70 leading-relaxed font-light mb-8">
                Amruta Todankar is a dedicated classical Kathak dancer and accomplished instructor with a profound passion for preserving and promoting this ancient art form. With over 15 years of rigorous training and teaching experience, she has become a beacon of excellence in the Kathak community.
              </p>

              {/* Info Cards */}
              <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                    <GraduationCap className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  Training & Lineage
                </h3>
                <p className="font-sans text-brand-black/70 font-light leading-relaxed pl-16">
                  Trained under the prestigious Lucknow Gharana tradition, her training encompasses the pure classical repertoire including Thaat, Toda, Tukra, and Paran with meticulous attention to Laya and Taal.
                </p>
              </div>

              <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                    <Award className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  Certifications & Achievements
                </h3>
                <ul className="font-sans text-brand-black/70 font-light space-y-2 pl-16 list-none">
                  <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Recognized Kathak Exponent by Ministry of Culture</li>
                  <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Advanced Certification from All India Radio</li>
                  <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Mentored 200+ Students across All Age Groups</li>
                </ul>
              </div>

              <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-6">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                    <Sparkles className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  Teaching Philosophy
                </h3>
                <p className="font-sans text-brand-black/70 font-light leading-relaxed pl-16 italic">
                  &quot;Kathak is not just a dance&mdash;it&rsquo;s a dialogue with tradition. I believe in nurturing each student&rsquo;s unique artistic voice while maintaining the purity and authenticity of this classical heritage.&quot;
                </p>
              </div>

              <div className="pt-6 text-center md:text-left">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-10 py-4 rounded-[12px] font-sans font-bold text-lg hover:shadow-[0_4px_20px_rgba(179,92,17,0.4)] transition-all transform hover:-translate-y-1 hover:scale-[1.02] shadow-md"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
