'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { User, Award, Sparkles } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const guruPhotoSrc = 'https://res.cloudinary.com/dnnnouh5x/image/upload/v1783846646/g766uhiacofbd8m0pcxx.jpg';

export default function About() {
  const [photoError, setPhotoError] = useState(false);
  const [secondPhotoSrc, setSecondPhotoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Note: Tell user to use tag "maamguru" without punctuation for safety
    fetch('/api/gallery/maamguru')
      .then(r => r.json())
      .then((data: { photos?: string[] }) => {
        if (Array.isArray(data.photos) && data.photos.length > 0) {
          setSecondPhotoSrc(data.photos[0]);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="about" className="py-24 bg-brand-cream relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Portrait */}
          <ScrollReveal variant="slideLeft" duration={0.7}>
            <div className="flex flex-col gap-8 items-center justify-start group lg:sticky lg:top-24">
              {/* First Portrait */}
              <div className="relative w-full max-w-md aspect-[4/5] bg-brand-maroon rounded-[18px] overflow-hidden shadow-[0_10px_40px_rgba(74,15,29,0.2)] transition-all duration-700 hover:shadow-[0_15px_50px_rgba(179,92,17,0.25)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 to-brand-black/80 z-10" />
                
                <div className="absolute inset-0 bg-brand-maroon/40 backdrop-blur-sm z-0 hover:scale-105 transition-transform duration-700">
                  {!photoError ? (
                    <Image
                      src={guruPhotoSrc}
                      alt="Smt. Amruta Pawan Todankar"
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
                    Founder & Director
                  </p>
                </div>
              </div>

              {/* Second Dynamic Photo */}
              {secondPhotoSrc && (
                <div className="relative w-full max-w-md aspect-[4/5] bg-brand-maroon rounded-[18px] overflow-hidden shadow-[0_10px_40px_rgba(74,15,29,0.2)] transition-all duration-700 hover:shadow-[0_15px_50px_rgba(179,92,17,0.25)] hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/60 z-10" />
                  <div className="absolute inset-0 bg-brand-maroon/20 backdrop-blur-[1px] z-0 hover:scale-105 transition-transform duration-700">
                    <Image
                      src={secondPhotoSrc}
                      alt="Kathak Shades Guru Moments"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {/* Gold border accent */}
                  <div className="absolute inset-4 border-[0.5px] border-brand-gold/40 rounded-[10px] z-20 pointer-events-none" />
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right Side - Biography */}
          <div className="space-y-8">
            <ScrollReveal variant="fadeUp">
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
            </ScrollReveal>

            <div className="space-y-5">
              {/* Bio paragraph */}
              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div className="space-y-3 text-brand-black/70 font-light leading-relaxed font-sans text-base">
                  <p className="font-serif text-xl font-bold text-brand-maroon">Smt. Amruta Pawan Todankar</p>
                  <p className="font-sans text-sm text-brand-gold uppercase tracking-widest font-semibold mb-3">Founder &amp; Director, Kathak Shades – The School of Kathak</p>
                  <p>
                    Smt. Amruta Pawan Todankar is a dedicated Kathak artist, performer, teacher, and choreographer, carrying forward the tradition of Kathak with authenticity, grace, and devotion. A disciple of Guru Smt. Manasi Deshpande Ji, she has devoted over 25 years to learning, performing, and teaching this classical art form.
                  </p>
                </div>
              </ScrollReveal>

              {/* Journey & Achievements */}
              <ScrollReveal variant="fadeUp" delay={0.2}>
                <div className="bg-brand-cream rounded-[16px] border border-brand-gold/30 shadow-[0_4px_15px_rgba(123,74,46,0.05)] hover:shadow-[0_8px_25px_rgba(123,74,46,0.12)] transition-all duration-300 hover:-translate-y-1 p-6">
                  <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-cream/10 shadow-inner">
                      <Award className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    Journey &amp; Achievements
                  </h3>
                  <div className="font-sans text-brand-black/70 font-light leading-relaxed pl-16 space-y-3">
                    <ul className="list-none space-y-2">
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Founder &amp; Director of <strong>Kathak Shades – The School of Kathak,</strong> dedicated to preserving and promoting the classical richness of Kathak.</li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Over <strong>25+ years of Kathak training</strong> and <strong>16+ years of teaching experience.</strong></li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Holds qualifications of <strong>Visharad (Vishesh Yogyata), Alankar, B.A., and M.A. in Kathak.</strong></li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Completed the <strong>Dance Teacher Training Program at Kafqa Academy.</strong></li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Trained students across India and abroad, many achieving distinctions in Gandharva examinations.</li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Served as a Kathak mentor at reputed institutions including <strong>Billabong High International School, EuroSchool, Yellow Light School, and Red Arrows Institute.</strong></li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Performed at prestigious cultural platforms and festivals including <strong>Natyanjali, Girnar Festival, Yatra Festival, Oasis of Kathak, ISKCON Temple, Varsa, Hamari Mehfil, and Atharvosav.</strong></li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Received the <strong>Nritya Nipun Award</strong> at Atharvosav.</li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Created <strong>&ldquo;Samarpan&rdquo;,</strong> a signature thematic Kathak production.</li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Authored <strong>&ldquo;नृत्यारंभ&rdquo;,</strong> a beginner-friendly foundation book on Kathak.</li>
                      <li className="relative before:content-['✦'] before:absolute before:-left-5 before:text-brand-gold/60 before:text-xs">Through <strong>BE Event Management,</strong> curates and choreographs stage productions, annual showcases, corporate events, and cultural programmes.</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Teaching Philosophy */}
              <ScrollReveal variant="fadeUp" delay={0.3}>
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
              </ScrollReveal>

              <ScrollReveal variant="scaleUp" delay={0.35}>
                <div className="pt-6 text-center md:text-left">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black px-10 py-4 rounded-[12px] font-sans font-bold text-lg hover:shadow-[0_4px_20px_rgba(179,92,17,0.4)] transition-all transform hover:-translate-y-1 hover:scale-[1.02] shadow-md"
                  >
                    Know More
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
