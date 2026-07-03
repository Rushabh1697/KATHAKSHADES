export default function Catalogue() {
  const items = [
    {
      category: 'Costumes',
      emoji: '👘',
      products: [
        {
          name: 'Classic Anarkali Set',
          desc: 'Traditional Kathak anarkali in deep maroon with gold zari embroidery. Available in all sizes.',
          price: '₹2,800 – ₹4,200',
          tag: 'Best Seller',
        },
        {
          name: 'Lehenga Choli Set',
          desc: 'Elegant lehenga with matching choli and dupatta. Rich silk fabric, intricate border work.',
          price: '₹3,500 – ₹6,000',
          tag: 'Premium',
        },
        {
          name: 'Practice Churidar Set',
          desc: 'Comfortable daily-practice outfit. Breathable cotton with minimal embroidery.',
          price: '₹800 – ₹1,400',
          tag: 'Practice',
        },
        {
          name: 'Ghagra Set (Kids)',
          desc: 'Vibrant ghagra choli for young dancers. Lightweight and comfortable for children.',
          price: '₹1,200 – ₹2,000',
          tag: 'Kids',
        },
      ],
    },
    {
      category: 'Ghungroos',
      emoji: '🔔',
      products: [
        {
          name: 'Brass Ghungroos (100 bells)',
          desc: 'High-quality brass ghungroos on strong cotton padding. Perfect resonance for Kathak.',
          price: '₹650 – ₹900',
          tag: 'Professional',
        },
        {
          name: 'Brass Ghungroos (50 bells)',
          desc: 'Ideal for beginners and children. Comfortable padding, durable knotting.',
          price: '₹350 – ₹500',
          tag: 'Beginner',
        },
        {
          name: 'Silver-Tone Ghungroos (100 bells)',
          desc: 'Premium silver-coated bells with crisp sound. For stage performances.',
          price: '₹1,100 – ₹1,600',
          tag: 'Stage',
        },
      ],
    },
    {
      category: 'Accessories',
      emoji: '💎',
      products: [
        {
          name: 'Kathak Jewellery Set',
          desc: 'Mathapatti, earrings, necklace and bangles set in gold finish. Traditional stage look.',
          price: '₹1,500 – ₹3,000',
          tag: 'Stage',
        },
        {
          name: 'Bindi & Makeup Kit',
          desc: 'Stage-grade face makeup and bindi collection curated for classical dancers.',
          price: '₹400 – ₹900',
          tag: 'Essentials',
        },
        {
          name: 'Hair Accessories Set',
          desc: 'Traditional gajra (floral), clips and pins for classic Kathak stage hair styling.',
          price: '₹250 – ₹600',
          tag: 'Essentials',
        },
        {
          name: 'Dance Bag',
          desc: 'Spacious tote in maroon & gold. Designed to carry costume, ghungroos and accessories.',
          price: '₹700 – ₹1,200',
          tag: 'Utility',
        },
      ],
    },
  ];

  const tagColors: Record<string, string> = {
    'Best Seller': 'bg-brand-gold text-brand-maroon',
    'Premium': 'bg-purple-700 text-white',
    'Practice': 'bg-green-700 text-white',
    'Kids': 'bg-pink-600 text-white',
    'Professional': 'bg-brand-maroon text-brand-gold',
    'Beginner': 'bg-teal-700 text-white',
    'Stage': 'bg-indigo-700 text-white',
    'Essentials': 'bg-amber-700 text-white',
    'Utility': 'bg-gray-700 text-white',
  };

  return (
    <section id="catalogue" className="py-20 bg-brand-cream min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Kathak Shades Store
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
            Catalogue
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
            Everything a Kathak dancer needs — from practice costumes to stage-ready outfits, ghungroos, and accessories.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-brand-maroon/10 border border-brand-maroon/20 rounded-full px-5 py-2">
            <span className="text-brand-maroon text-sm font-sans font-semibold">
              📞 To order or enquire: <a href="https://wa.me/919773602766" className="text-brand-gold font-bold hover:underline">WhatsApp +91 97736 02766</a>
            </span>
          </div>
        </div>

        {/* Categories */}
        {items.map(cat => (
          <div key={cat.category} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{cat.emoji}</span>
              <div>
                <h2 className="font-serif text-3xl font-bold text-brand-maroon">{cat.category}</h2>
                <div className="h-1 w-16 bg-brand-gold rounded mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border border-brand-maroon/10"
                >
                  {/* Top Color Bar */}
                  <div className="h-2 bg-gradient-to-r from-brand-maroon to-brand-gold" />

                  {/* Decorative icon area */}
                  <div className="bg-brand-maroon/5 flex items-center justify-center h-28 group-hover:bg-brand-maroon/10 transition-colors">
                    <span className="text-5xl opacity-60">{cat.emoji}</span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-serif text-lg font-bold text-brand-maroon leading-tight">{product.name}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ${tagColors[product.tag] || 'bg-gray-200 text-gray-700'}`}>
                        {product.tag}
                      </span>
                    </div>
                    <p className="font-sans text-brand-black/70 text-sm leading-relaxed mb-4">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-brand-gold font-bold text-base">{product.price}</p>
                      <a
                        href={`https://wa.me/919773602766?text=Hi!%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}%20from%20the%20Kathak%20Shades%20Catalogue.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-full text-xs font-bold hover:bg-brand-maroon/90 transition-colors"
                      >
                        Enquire
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom Note */}
        <div className="text-center bg-brand-maroon rounded-2xl p-8 mt-4">
          <p className="font-serif text-2xl font-bold text-brand-gold mb-3">Custom Orders Welcome!</p>
          <p className="font-sans text-brand-cream/80 max-w-lg mx-auto mb-5">
            Need a specific colour, size, or custom design? We accept custom costume orders for performances, recitals, and exams.
          </p>
          <a
            href="https://wa.me/919773602766?text=Hi!%20I%20would%20like%20to%20place%20a%20custom%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-brand-maroon px-8 py-3 rounded-full font-bold hover:bg-brand-gold/90 transition-colors"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
