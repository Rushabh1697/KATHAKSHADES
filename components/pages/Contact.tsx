'use client';

import { useState, FormEvent } from 'react';

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
            Have questions? Connect with us on WhatsApp or visit one of our studios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Studio Info */}
          <div className="space-y-6 animate-slide-up">
            {/* Dombivli */}
            <div className="bg-white/10 border-2 border-brand-gold/40 p-7 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-brand-gold mb-1">🏛️ Dombivli East</h3>
              <p className="font-sans text-brand-gold/60 text-xs uppercase tracking-widest mb-4">Kidz Kingdom — Regency Anantam</p>
              <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-4">
                <a href="https://maps.app.goo.gl/hT3WLafHvm95d2LK6" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:underline">Front of Building No. 24 &amp; 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli (East)</a>
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">📅 Days:</span> Every Monday &amp; Wednesday</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">🕖 Timing:</span> 7:00 PM – 8:00 PM</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">📞 Kathak Shades:</span> +91 97736 02766</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">📞 Kidz Kingdom:</span> +91 96194 42555</p>
              </div>
            </div>

            {/* Thane */}
            <div className="bg-white/10 border-2 border-brand-gold/40 p-7 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-brand-gold mb-1">🏛️ Thane West</h3>
              <p className="font-sans text-brand-gold/60 text-xs uppercase tracking-widest mb-4">Kinder Hive — Vasant Vihar</p>
              <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-4">
                <a href="https://maps.google.com/?q=Ananthram+Complex+Vasant+Vihar+Thane+West" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:underline">Ground Floor, Branch-1, Ananthram Complex, Opp. HDFC ATM, Siddhanchal Circle, Vasant Vihar, Thane West – 400610</a>
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">📅 Days:</span> Every Tuesday &amp; Thursday</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">🕖 Timing:</span> 7:00 PM – 8:00 PM</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">📞 Kathak Shades:</span> +91 97736 02766</p>
                <p className="text-brand-cream"><span className="text-brand-gold font-bold">📞 Kinder Hive:</span> +91 98851 80738</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 border-2 border-brand-gold/40 p-7 rounded-2xl">
              <h3 className="font-serif text-xl font-bold text-brand-gold mb-5">🌐 Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                {[
                  { label: 'WhatsApp', href: 'https://wa.me/919773602766', icon: '💬' },
                  { label: 'Instagram', href: 'https://instagram.com', icon: '📷' },
                  { label: 'Facebook', href: 'https://facebook.com', icon: 'f' },
                  { label: 'YouTube', href: 'https://youtube.com', icon: '▶' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold text-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-cream rounded-2xl p-8 shadow-2xl animate-slide-up">
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
                <label className="block font-sans font-semibold text-brand-maroon mb-2">Preferred Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-xl focus:outline-none focus:border-brand-gold font-sans transition-colors bg-white text-brand-maroon"
                >
                  <option value="dombivli">Dombivli East (Regency Anantam)</option>
                  <option value="thane">Thane West (Vasant Vihar)</option>
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
                className="w-full bg-brand-maroon text-brand-gold px-6 py-4 rounded-xl font-sans font-bold text-lg hover:bg-brand-maroon/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? 'Connecting...' : '💬 Contact via WhatsApp'}
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
