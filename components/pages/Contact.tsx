'use client';

import { useState, FormEvent } from 'react';
import { Landmark, CalendarDays, Clock, Phone, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'dombivli',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);

    const locationNames: { [key: string]: string } = {
      dombivli: 'Dombivli East (Regency Anantam)',
      thane: 'Thane West (Vasant Vihar)',
    };

    const message = `Hello Kathak Shades! I would like to enquire about your classes.\n- *Name:* ${formData.name}\n- *Contact:* ${formData.phone}\n- *Preferred Location:* ${locationNames[formData.location]}\n- *Query:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919773602766?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', phone: '', location: 'dombivli', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-brand-maroon min-h-screen">
      <div className="container">
        <div className="text-center mb-14 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Get In Touch
          </h1>
          <p className="font-sans text-lg text-brand-cream max-w-2xl mx-auto">
            Have questions? Connect with us on WhatsApp or visit one of our classes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Classes Info — All Branches */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="font-serif text-2xl font-bold text-brand-gold flex items-center gap-2 mb-2">
              <Landmark className="w-6 h-6" /> Classes Locations &amp; Batches
            </h2>

            {/* Thane — Rhymes N Colours */}
            <div className="bg-white/20 backdrop-blur-md border-2 border-brand-gold/40 p-6 rounded-2xl">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-gold">Thane West — Rhymes N Colours</h3>
                  <p className="font-sans text-brand-gold/70 text-xs uppercase tracking-widest">Manpada Branch</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/ZWgt2sHgxhBS1K3E7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold border border-brand-gold/40 rounded-full text-xs font-semibold transition-colors flex-shrink-0"
                >
                  Map ↗
                </a>
              </div>
              <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-3">
                Ground floor, Khewra Cir Marg, near Acme Ozone, Manpada, Thane West
              </p>
              <div className="space-y-1.5 text-sm">
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Days:</span> Every Tuesday &amp; Friday</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Clock className="w-4 h-4" /> Timing:</span> 6:00 PM – 7:00 PM and 7:00 PM – 8:00 PM</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Contact:</span> +91 97736 02766</p>
              </div>
            </div>

            {/* Thane — Kinder Hive */}
            <div className="bg-white/20 backdrop-blur-md border-2 border-brand-gold/40 p-6 rounded-2xl">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-gold">Thane West — Kinder Hive</h3>
                  <p className="font-sans text-brand-gold/70 text-xs uppercase tracking-widest">Vasant Vihar Branch</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold border border-brand-gold/40 rounded-full text-xs font-semibold transition-colors flex-shrink-0"
                >
                  Map ↗
                </a>
              </div>
              <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-3">
                Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610
              </p>
              <div className="space-y-1.5 text-sm">
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Days:</span> Every Tuesday &amp; Thursday</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Clock className="w-4 h-4" /> Timing:</span> 7:00 PM – 8:00 PM</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Contact:</span> +91 97736 02766</p>
              </div>
            </div>

            {/* Dombivli — SD Studio */}
            <div className="bg-white/20 backdrop-blur-md border-2 border-brand-gold/40 p-6 rounded-2xl">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-gold">Dombivli East — SD Studio</h3>
                  <p className="font-sans text-brand-gold/70 text-xs uppercase tracking-widest">Regency Anantam Branch 1</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/YEA5qG25toE9D2gPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold border border-brand-gold/40 rounded-full text-xs font-semibold transition-colors flex-shrink-0"
                >
                  Map ↗
                </a>
              </div>
              <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-3">
                SD Education hub, Regency Anantam gate no 1, Dombivli (East)
              </p>
              <div className="space-y-1.5 text-sm">
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Days:</span> Every Monday &amp; Wednesday</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Clock className="w-4 h-4" /> Timing:</span> 5:00 PM – 6:00 PM and 7:00 PM – 8:00 PM</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Contact:</span> +91 97736 02766</p>
              </div>
            </div>

            {/* Dombivli — Kidzdom */}
            <div className="bg-white/20 backdrop-blur-md border-2 border-brand-gold/40 p-6 rounded-2xl">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-gold">Dombivli East — Kidzdom</h3>
                  <p className="font-sans text-brand-gold/70 text-xs uppercase tracking-widest">Regency Anantam Branch 2</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/hT3WLafHvm95d2LK6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold border border-brand-gold/40 rounded-full text-xs font-semibold transition-colors flex-shrink-0"
                >
                  Map ↗
                </a>
              </div>
              <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-3">
                Front of Building No. 24 &amp; 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli (East)
              </p>
              <div className="space-y-1.5 text-sm">
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Days:</span> Every Monday &amp; Wednesday</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Clock className="w-4 h-4" /> Timing:</span> 7:15 PM – 8:00 PM</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Contact:</span> +91 97736 02766</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/20 backdrop-blur-md border-2 border-brand-gold/40 p-6 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-brand-gold mb-4 flex items-center gap-2"><Globe className="w-5 h-5" /> Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919773602766"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kathak_shades?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@kathak_shades6419"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-cream rounded-2xl p-8 shadow-2xl animate-slide-up self-start">
            <h3 className="font-serif text-2xl font-bold text-brand-maroon mb-6">
              Send an Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-xl focus:outline-none focus:border-brand-gold font-sans transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit number"
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-xl focus:outline-none focus:border-brand-gold font-sans transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">Preferred Studio Branch</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-xl focus:outline-none focus:border-brand-gold font-sans transition-colors bg-white text-brand-maroon font-medium"
                >
                  <option value="dombivli_kidz">Dombivli East — Kidz Kingdom (Regency Anantam)</option>
                  <option value="dombivli_sd">Dombivli East — SD Studio (Regency Anantam Gate 1)</option>
                  <option value="thane_kinder">Thane West — Kinder Hive (Vasant Vihar)</option>
                  <option value="thane_rhymes">Thane West — Rhymes N Colours (Manpada)</option>
                </select>
              </div>
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">Your Message / Query</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in Kathak..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-xl focus:outline-none focus:border-brand-gold font-sans transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-maroon text-brand-gold px-6 py-4 rounded-xl font-sans font-bold text-lg hover:bg-brand-maroon/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-md"
              >
                {isSubmitting ? 'Connecting...' : <span className="flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Contact via WhatsApp</span>}
              </button>
              <p className="font-sans text-sm text-brand-black/60 text-center">
                You&rsquo;ll be redirected to WhatsApp to complete your enquiry
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
