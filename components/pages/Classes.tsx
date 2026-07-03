'use client';

import { useState } from 'react';

const studios = [
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
    color: 'bg-brand-maroon',
    mapLink: 'https://maps.app.goo.gl/hT3WLafHvm95d2LK6',
    whatsapp: '919773602766',
  },
  {
    id: 'thane',
    name: 'Thane West',
    venue: 'Kinder Hive — Vasant Vihar',
    address: 'Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610',
    days: 'Every Tuesday & Thursday',
    timing: '7:00 PM – 8:00 PM',
    contacts: [
      { label: 'Kathak Shades', number: '+91 97736 02766' },
      { label: 'Kinder Hive', number: '+91 98851 80738' },
    ],
    color: 'bg-[#0e4a72]',
    mapLink: 'https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West',
    whatsapp: '919773602766',
  },
];

export default function Classes() {
  const [activeStudio, setActiveStudio] = useState('dombivli');
  const currentStudio = studios.find(s => s.id === activeStudio)!;

  return (
    <section id="classes" className="py-20 bg-brand-cream min-h-screen">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14 animate-slide-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
            Classes &amp; Batches
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
            Join our expertly guided Kathak classes at two studio locations. All age groups welcome.
          </p>
        </div>

        {/* Studio Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {studios.map(studio => (
            <button
              key={studio.id}
              onClick={() => setActiveStudio(studio.id)}
              className={`px-8 py-3 rounded-full font-sans font-bold transition-all transform hover:scale-105 shadow-md ${
                activeStudio === studio.id
                  ? 'bg-brand-maroon text-brand-gold border-2 border-brand-gold'
                  : 'bg-white text-brand-maroon border-2 border-brand-maroon/30 hover:border-brand-maroon'
              }`}
            >
              {studio.name}
            </button>
          ))}
        </div>

        {/* Studio Detail Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`${currentStudio.color} rounded-3xl shadow-2xl overflow-hidden`}>
            {/* Top Gold Bar */}
            <div className="h-2 w-full bg-brand-gold" />

            <div className="p-8 md:p-12">
              {/* Venue */}
              <div className="mb-8">
                <p className="font-sans text-brand-gold/70 text-xs uppercase tracking-widest mb-1">Studio</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-gold">{currentStudio.name}</h2>
                <p className="font-sans text-brand-cream/80 text-lg mt-1">{currentStudio.venue}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Schedule */}
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-2xl p-6 border border-brand-gold/20">
                    <h3 className="font-serif text-brand-gold text-xl font-bold mb-4 flex items-center gap-2">
                      <span>📅</span> Class Schedule
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-sans text-brand-cream/60 text-xs uppercase tracking-wider mb-1">Class Days</p>
                        <p className="font-sans text-brand-cream font-bold text-lg">{currentStudio.days}</p>
                      </div>
                      <div>
                        <p className="font-sans text-brand-cream/60 text-xs uppercase tracking-wider mb-1">Timing</p>
                        <p className="font-sans text-brand-cream font-bold text-lg">{currentStudio.timing}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contacts */}
                  <div className="bg-white/10 rounded-2xl p-6 border border-brand-gold/20">
                    <h3 className="font-serif text-brand-gold text-xl font-bold mb-4 flex items-center gap-2">
                      <span>📞</span> Contact
                    </h3>
                    <div className="space-y-3">
                      {currentStudio.contacts.map((c, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <p className="font-sans text-brand-cream/70 text-sm">{c.label}</p>
                          <a
                            href={`tel:${c.number.replace(/\s/g, '')}`}
                            className="font-sans text-brand-gold font-bold text-sm hover:underline"
                          >
                            {c.number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Address + CTAs */}
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-2xl p-6 border border-brand-gold/20">
                    <h3 className="font-serif text-brand-gold text-xl font-bold mb-4 flex items-center gap-2">
                      <span>📍</span> Address
                    </h3>
                    <p className="font-sans text-brand-cream/90 text-sm leading-relaxed">
                      {currentStudio.address}
                    </p>
                    <a
                      href={currentStudio.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-brand-gold text-sm font-bold hover:underline"
                    >
                      View on Maps →
                    </a>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${currentStudio.whatsapp}?text=Hello%20Kathak%20Shades!%20I%20want%20to%20enquire%20about%20${currentStudio.name}%20classes.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-xl font-sans font-bold hover:bg-[#20bb5a] transition-colors"
                    >
                      <span>💬</span> Enquire on WhatsApp
                    </a>
                    <a
                      href="/contact"
                      className="w-full flex items-center justify-center gap-3 bg-brand-gold text-brand-maroon py-3 rounded-xl font-sans font-bold hover:bg-brand-gold/90 transition-colors"
                    >
                      📋 Fill Enquiry Form
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-8 text-center p-5 bg-brand-maroon/10 rounded-2xl border-2 border-brand-maroon/20">
            <p className="font-sans text-brand-maroon font-semibold">
              🎓 Classes are open for all age groups. Contact us to know the batch that suits you best!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
