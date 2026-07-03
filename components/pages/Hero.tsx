'use client';

export default function Hero() {
  const handleBookTrial = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><radialGradient id="vignette" cx="50%" cy="50%" r="60%"><stop offset="0%" style="stop-color:%235C0612;stop-opacity:0" /><stop offset="100%" style="stop-color:%235C0612;stop-opacity:0.6" /></radialGradient></defs><rect width="1200" height="600" fill="%235C0612"/><circle cx="600" cy="300" r="500" fill="url(%23vignette)"/></svg>')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-maroon/40 via-transparent to-brand-maroon/60" />

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto text-center px-4 animate-fade-in">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brand-gold mb-4 drop-shadow-lg">
          KATHAK SHADES
        </h1>
        
        <p className="font-sans text-xl sm:text-2xl text-brand-cream mb-12 drop-shadow-md">
          The School of Kathak — Where tradition dances on.
        </p>

        <button
          onClick={handleBookTrial}
          className="bg-brand-gold text-brand-maroon px-8 sm:px-12 py-4 rounded-full font-sans font-bold text-lg hover:bg-brand-gold/90 transition-all transform hover:scale-105 shadow-2xl drop-shadow-lg"
        >
          Book a Trial Class
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent z-10" />
    </section>
  );
}
