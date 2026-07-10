'use client';

import { useState } from 'react';
import { CalendarDays, Phone, MapPin, MessageCircle, ClipboardList, GraduationCap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    mapLink: 'https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West',
    whatsapp: '919773602766',
  },
];

export default function Classes() {
  const [activeStudio, setActiveStudio] = useState('dombivli');
  const currentStudio = studios.find(s => s.id === activeStudio)!;

  return (
    <section id="classes" className="py-24 bg-brand-cream relative min-h-screen">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGOEVFIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjAwLCAxNTUsIDYwLCAwLjE1KSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-50 mix-blend-multiply pointer-events-none" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-brand-gold"></span>
            <span className="text-brand-gold text-lg">✦</span>
            <span className="h-[1px] w-12 bg-brand-gold"></span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 tracking-wide">
            Classes & Batches
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto font-light">
            Join our expertly guided Kathak classes at two studio locations. All age groups welcome.
          </p>
        </div>

        {/* Studio Tabs */}
        <div className="flex flex-wrap gap-6 mb-16 justify-center">
          {studios.map(studio => (
            <button
              key={studio.id}
              onClick={() => setActiveStudio(studio.id)}
              className={`px-8 py-3 rounded-full font-sans font-medium transition-all transform hover:-translate-y-1 ${
                activeStudio === studio.id
                  ? 'bg-brand-maroon text-brand-gold shadow-[0_4px_15px_rgba(74,15,29,0.2)]'
                  : 'bg-transparent text-brand-maroon border border-brand-maroon/30 hover:border-brand-maroon hover:shadow-sm'
              }`}
            >
              {studio.name}
            </button>
          ))}
        </div>

        {/* Studio Detail Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-brand-cream rounded-[16px] border border-brand-gold/40 shadow-[0_10px_40px_rgba(123,74,46,0.08)] overflow-hidden"
            >
              {/* Top Gold Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark" />

              <div className="p-8 md:p-12">
                {/* Venue */}
                <div className="mb-12 text-center md:text-left">
                  <p className="font-sans text-brand-gold text-xs uppercase tracking-[0.2em] mb-2 font-semibold">Studio</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-2">{currentStudio.name}</h2>
                  <p className="font-sans text-brand-black/70 text-lg font-light">{currentStudio.venue}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left: Schedule & Contacts */}
                  <div className="space-y-8">
                    <div className="bg-brand-cream border border-brand-gold/30 rounded-[12px] p-8 shadow-sm">
                      <h3 className="font-serif text-brand-maroon text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center bg-brand-cream/10">
                          <CalendarDays className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                        </div>
                        Class Schedule
                      </h3>
                      <div className="space-y-5">
                        <div className="flex flex-col gap-1">
                          <p className="font-sans text-brand-black/50 text-xs uppercase tracking-wider font-semibold">Class Days</p>
                          <p className="font-sans text-brand-maroon font-medium text-lg">{currentStudio.days}</p>
                        </div>
                        <div className="w-full h-[1px] bg-brand-gold/10" />
                        <div className="flex flex-col gap-1">
                          <p className="font-sans text-brand-black/50 text-xs uppercase tracking-wider font-semibold">Timing</p>
                          <p className="font-sans text-brand-maroon font-medium text-lg">{currentStudio.timing}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-cream border border-brand-gold/30 rounded-[12px] p-8 shadow-sm">
                      <h3 className="font-serif text-brand-maroon text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center bg-brand-cream/10">
                          <Phone className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                        </div>
                        Contact Numbers
                      </h3>
                      <div className="space-y-4">
                        {currentStudio.contacts.map((c, i) => (
                          <div key={i} className="flex items-center justify-between group">
                            <p className="font-sans text-brand-black/70 text-sm font-light">{c.label}</p>
                            <a
                              href={`tel:${c.number.replace(/\s/g, '')}`}
                              className="font-sans text-brand-maroon font-medium text-sm group-hover:text-brand-gold transition-colors flex items-center gap-1"
                            >
                              {c.number} <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Address + CTAs */}
                  <div className="space-y-8 flex flex-col">
                    <div className="bg-brand-cream border border-brand-gold/30 rounded-[12px] p-8 shadow-sm flex-grow">
                      <h3 className="font-serif text-brand-maroon text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center bg-brand-cream/10">
                          <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                        </div>
                        Address
                      </h3>
                      <p className="font-sans text-brand-black/70 text-sm leading-relaxed font-light mb-6">
                        {currentStudio.address}
                      </p>
                      <a
                        href={currentStudio.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full py-3 border border-brand-gold/60 text-brand-gold rounded-[12px] font-sans text-sm font-semibold hover:bg-brand-gold/5 transition-colors group"
                      >
                        View on Maps <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                      </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                      <a
                        href={`https://wa.me/${currentStudio.whatsapp}?text=Hello%20Kathak%20Shades!%20I%20want%20to%20enquire%20about%20${currentStudio.name}%20classes.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-[12px] font-sans font-bold hover:bg-[#20bb5a] transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.5} /> Enquire on WhatsApp
                      </a>
                      <a
                        href="/contact"
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-brand-gold-light to-brand-gold-dark text-brand-black py-4 rounded-[12px] font-sans font-bold transition-all transform hover:-translate-y-1 shadow-[0_4px_15px_rgba(200,155,60,0.2)] hover:shadow-[0_8px_25px_rgba(200,155,60,0.3)]"
                      >
                        <ClipboardList className="w-5 h-5 text-brand-black" strokeWidth={1.5} /> Fill Enquiry Form
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Info Note */}
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
