'use client';

import { useState } from 'react';

const studios = [
  {
    id: 'dombivli',
    name: 'Dombivli East Studio',
    address: 'Front of Building No. 24 & 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli East',
    batches: [
      {
        title: 'Kids Batch',
        level: 'Ages 5-12',
        timing: 'Mon, Wed, Fri - 4:00 PM to 5:00 PM',
        duration: '1 Hour',
      },
      {
        title: 'Teen Batch',
        level: 'Ages 13-18',
        timing: 'Tue, Thu, Sat - 5:30 PM to 6:45 PM',
        duration: '1.25 Hours',
      },
      {
        title: 'Adults Batch',
        level: 'Age 18+',
        timing: 'Mon, Wed, Fri - 6:00 PM to 7:30 PM',
        duration: '1.5 Hours',
      },
      {
        title: 'Advanced Batch',
        level: 'By Selection',
        timing: 'Tue, Thu, Sat - 7:00 PM to 8:30 PM',
        duration: '1.5 Hours',
      },
    ],
  },
  {
    id: 'thane',
    name: 'Thane West Studio',
    address: 'To be announced',
    batches: [
      {
        title: 'Kids Batch',
        level: 'Ages 5-12',
        timing: 'Mon, Wed, Fri - 4:30 PM to 5:30 PM',
        duration: '1 Hour',
      },
      {
        title: 'Adults Batch',
        level: 'Age 18+',
        timing: 'Tue, Thu, Sat - 6:00 PM to 7:30 PM',
        duration: '1.5 Hours',
      },
      {
        title: 'Advanced Batch',
        level: 'By Selection',
        timing: 'Mon, Wed, Fri - 7:00 PM to 8:30 PM',
        duration: '1.5 Hours',
      },
    ],
  },
  {
    id: 'online',
    name: 'Online Interactive Batches',
    address: 'Available worldwide via Zoom/Google Meet',
    batches: [
      {
        title: 'Kids Online Batch',
        level: 'Ages 5-12',
        timing: 'Tue, Thu - 5:00 PM to 6:00 PM IST',
        duration: '1 Hour',
      },
      {
        title: 'Adults Online Batch',
        level: 'Age 18+',
        timing: 'Mon, Wed, Fri - 7:00 PM to 8:30 PM IST',
        duration: '1.5 Hours',
      },
      {
        title: 'Weekend Batch',
        level: 'All Ages',
        timing: 'Sat, Sun - 10:00 AM to 11:30 AM IST',
        duration: '1.5 Hours',
      },
    ],
  },
];

export default function Classes() {
  const [activeStudio, setActiveStudio] = useState('dombivli');

  const currentStudio = studios.find(s => s.id === activeStudio)!;

  return (
    <section id="classes" className="py-20 bg-brand-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
            Classes & Batches
          </h2>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
            Choose from our expertly crafted programs across multiple locations, designed for all skill levels.
          </p>
        </div>

        {/* Studio Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {studios.map(studio => (
            <button
              key={studio.id}
              onClick={() => setActiveStudio(studio.id)}
              className={`px-6 py-3 rounded-full font-sans font-bold transition-all transform hover:scale-105 ${
                activeStudio === studio.id
                  ? 'bg-brand-maroon text-brand-gold border-2 border-brand-gold'
                  : 'bg-brand-gold/20 text-brand-maroon border-2 border-brand-maroon hover:bg-brand-gold/30'
              }`}
            >
              {studio.name}
            </button>
          ))}
        </div>

        {/* Studio Address */}
        <div className="text-center mb-12 p-4 bg-brand-maroon/10 rounded-lg border-2 border-brand-maroon/30">
          <p className="font-sans text-sm text-brand-black/60">📍 Location:</p>
          <p className="font-sans text-lg font-semibold text-brand-maroon">
            {currentStudio.address}
          </p>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentStudio.batches.map((batch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border-4 border-brand-gold shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Header Bar */}
              <div className="bg-brand-maroon h-2" />

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brand-maroon mb-2">
                  {batch.title}
                </h3>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-sans text-xs text-brand-black/50 uppercase tracking-wider">
                      Level
                    </p>
                    <p className="font-sans text-sm font-semibold text-brand-maroon">
                      {batch.level}
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-xs text-brand-black/50 uppercase tracking-wider">
                      Schedule
                    </p>
                    <p className="font-sans text-sm font-semibold text-brand-maroon">
                      {batch.timing}
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-xs text-brand-black/50 uppercase tracking-wider">
                      Duration
                    </p>
                    <p className="font-sans text-sm font-semibold text-brand-gold">
                      {batch.duration}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-brand-gold text-brand-maroon py-2 rounded font-sans font-bold hover:bg-brand-gold/90 transition-colors text-sm"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
