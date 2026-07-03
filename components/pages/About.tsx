'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Portrait Placeholder */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative w-80 h-96 bg-gradient-to-b from-brand-maroon to-brand-maroon/60 rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder for guru portrait */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-maroon/40 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎭</div>
                  <p className="text-brand-gold font-serif font-bold">
                    Amruta Todankar
                  </p>
                  <p className="text-brand-cream/80 font-sans text-sm mt-2">
                    Head Guru
                  </p>
                </div>
              </div>
              
              {/* Gold border accent */}
              <div className="absolute inset-3 border-2 border-brand-gold/30 rounded" />
            </div>
          </div>

          {/* Right Side - Biography */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-2">
                About Amruta Todankar
              </h2>
              <div className="h-1 w-24 bg-brand-gold rounded" />
            </div>

            <div className="space-y-4">
              <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
                Amruta Todankar is a dedicated classical Kathak dancer and accomplished instructor with a profound passion for preserving and promoting this ancient art form. With over 15 years of rigorous training and teaching experience, she has become a beacon of excellence in the Kathak community.
              </p>

              <div className="bg-brand-maroon/10 border-l-4 border-brand-gold p-6 rounded">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3">
                  🎓 Training & Lineage
                </h3>
                <p className="font-sans text-brand-black/80">
                  Trained under the prestigious Lucknow Gharana tradition, Amruta has studied under several master gurus. Her training encompasses the pure classical repertoire including Thaat, Toda, Tukra, and Paran with meticulous attention to Laya (rhythm) and Taal (meter).
                </p>
              </div>

              <div className="bg-brand-gold/10 border-l-4 border-brand-maroon p-6 rounded">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3">
                  📜 Certifications & Achievements
                </h3>
                <ul className="font-sans text-brand-black/80 space-y-2">
                  <li>✓ Recognized Kathak Exponent by Ministry of Culture</li>
                  <li>✓ Advanced Certification from All India Radio</li>
                  <li>✓ Performed at National Festivals & Prestigious Venues</li>
                  <li>✓ Mentored 200+ Students across All Age Groups</li>
                </ul>
              </div>

              <div className="bg-brand-cream border-2 border-brand-maroon/30 p-6 rounded">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-3">
                  💝 Teaching Philosophy
                </h3>
                <p className="font-sans text-brand-black/80">
                  &quot;Kathak is not just a dance&mdash;it&rsquo;s a dialogue with tradition. I believe in nurturing each student&rsquo;s unique artistic voice while maintaining the purity and authenticity of this classical heritage. Through dedicated practice and spiritual connection, we transform movements into poetry and rhythm into meditation.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
