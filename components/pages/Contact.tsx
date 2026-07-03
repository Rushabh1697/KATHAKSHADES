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
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Format the WhatsApp message
    const locationNames: { [key: string]: string } = {
      dombivli: 'Dombivli East Studio',
      thane: 'Thane West Studio',
      online: 'Online Batch',
    };

    const message = `Hello Kathak Shades! I would like to inquire about your classes. Here are my details:\n- *Name:* ${formData.name}\n- *Contact:* ${formData.phone}\n- *Preferred Location:* ${locationNames[formData.location]}\n- *Query:* ${formData.message}`;

    // Encode the message for WhatsApp API
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919773602766?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        location: 'dombivli',
        message: '',
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-brand-maroon">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Get In Touch
          </h2>
          <p className="font-sans text-lg text-brand-cream max-w-2xl mx-auto">
            Have questions? Connect with us through WhatsApp or visit our studios. We're here to help you begin your Kathak journey!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-brand-maroon/50 border-2 border-brand-gold p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-brand-gold mb-6">
                📍 Our Studios
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-sans font-bold text-brand-cream mb-2">Dombivli East</p>
                  <p className="font-sans text-brand-cream/80 text-sm">
                    Front of Building No. 24 & 25, Gate No. 3, towards Maharaja Chai, Regency Anantam, Dombivli East
                  </p>
                </div>

                <div>
                  <p className="font-sans font-bold text-brand-cream mb-2">Thane West</p>
                  <p className="font-sans text-brand-cream/80 text-sm">
                    Details coming soon
                  </p>
                </div>

                <div>
                  <p className="font-sans font-bold text-brand-cream mb-2">Online Classes</p>
                  <p className="font-sans text-brand-cream/80 text-sm">
                    Available worldwide via Zoom/Google Meet
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-brand-maroon/50 border-2 border-brand-gold p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-brand-gold mb-6">
                🌐 Follow Us
              </h3>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold text-lg"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold"
                  title="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold"
                  title="YouTube"
                >
                  ▶
                </a>
                <a
                  href="https://wa.me/919773602766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold text-brand-maroon w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors font-bold"
                  title="WhatsApp"
                >
                  W
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-cream rounded-lg p-8 shadow-2xl animate-slide-up">
            <h3 className="font-serif text-2xl font-bold text-brand-maroon mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-lg focus:outline-none focus:border-brand-gold font-sans transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit number"
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-lg focus:outline-none focus:border-brand-gold font-sans transition-colors"
                  required
                />
              </div>

              {/* Location Dropdown */}
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">
                  Preferred Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-lg focus:outline-none focus:border-brand-gold font-sans transition-colors bg-white text-brand-maroon"
                >
                  <option value="dombivli">Dombivli East Studio</option>
                  <option value="thane">Thane West Studio</option>
                  <option value="online">Online Interactive Batches</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans font-semibold text-brand-maroon mb-2">
                  Your Message / Query
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in Kathak..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-brand-maroon/30 rounded-lg focus:outline-none focus:border-brand-gold font-sans transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-maroon text-brand-gold px-6 py-4 rounded-lg font-sans font-bold text-lg hover:bg-brand-maroon/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? 'Connecting...' : 'Contact Now via WhatsApp'}
              </button>

              <p className="font-sans text-sm text-brand-black/60 text-center">
                💬 You'll be redirected to WhatsApp to complete your inquiry
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
