export default function Catalogue() {
  const categories = [
    {
      label: 'Annual Events',
      emoji: '🎭',
      items: [
        {
          title: 'Varshik Utsav 2024',
          desc: 'Annual day celebration showcasing students\' performances across all batches.',
          type: 'Annual Event',
        },
        {
          title: 'Nritya Sangam 2023',
          desc: 'Grand stage performance featuring advanced students in full classical Kathak compositions.',
          type: 'Annual Event',
        },
        {
          title: 'Guru Purnima Celebration',
          desc: 'A sacred event dedicated to our gurus — featuring devotional Kathak performances.',
          type: 'Annual Event',
        },
      ],
    },
    {
      label: 'Workshops',
      emoji: '🎓',
      items: [
        {
          title: 'Taal Workshop — Teen Taal',
          desc: 'Intensive one-day workshop on Teen Taal theory, counting, and practical application.',
          type: 'Workshop',
        },
        {
          title: 'Abhinaya & Expression Workshop',
          desc: 'Focused session on facial expressions, mudras, and storytelling in Kathak.',
          type: 'Workshop',
        },
        {
          title: 'Costume & Makeup Workshop',
          desc: 'Hands-on session for students on stage costume, jewellery, and makeup techniques.',
          type: 'Workshop',
        },
      ],
    },
    {
      label: 'Performances',
      emoji: '🌟',
      items: [
        {
          title: 'Cultural Festival — Dombivli',
          desc: 'Kathak Shades represented at the city-level cultural festival with a group performance.',
          type: 'Performance',
        },
        {
          title: 'Thane Arts Festival',
          desc: 'Students performed at Thane\'s regional arts festival to great applause.',
          type: 'Performance',
        },
        {
          title: 'School Outreach Program',
          desc: 'Classical Kathak demonstration and mini-workshop conducted at local schools.',
          type: 'Performance',
        },
      ],
    },
    {
      label: 'Special Occasions',
      emoji: '✨',
      items: [
        {
          title: 'Diwali Celebration 2024',
          desc: 'Festive Kathak performances and in-house celebration with students and families.',
          type: 'Special',
        },
        {
          title: 'Navratri Garba & Kathak Night',
          desc: 'A fusion event blending classical Kathak with the festive spirit of Navratri.',
          type: 'Special',
        },
        {
          title: 'Year-End Recital',
          desc: 'Intimate recital where each student performs their term\'s learnings for family.',
          type: 'Special',
        },
      ],
    },
  ];

  const tagColors: Record<string, string> = {
    'Annual Event': 'bg-brand-gold text-brand-maroon',
    'Workshop': 'bg-blue-700 text-white',
    'Performance': 'bg-purple-700 text-white',
    'Special': 'bg-rose-600 text-white',
  };

  return (
    <section id="catalogue" className="py-20 bg-brand-cream min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Kathak Shades
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
            Events &amp; Gallery
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
            A glimpse into the vibrant world of Kathak Shades — our annual events, workshops, performances, and special celebrations.
          </p>
        </div>

        {/* Categories */}
        {categories.map(cat => (
          <div key={cat.label} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{cat.emoji}</span>
              <div>
                <h2 className="font-serif text-3xl font-bold text-brand-maroon">{cat.label}</h2>
                <div className="h-1 w-16 bg-brand-gold rounded mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border border-brand-maroon/10"
                >
                  {/* Photo Placeholder */}
                  <div className="relative bg-gradient-to-br from-brand-maroon via-brand-maroon/80 to-brand-black h-48 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-500">{cat.emoji}</span>
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[item.type]}`}>
                        {item.type}
                      </span>
                    </div>
                    {/* Photo coming soon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-maroon/60">
                      <p className="font-sans text-brand-gold font-bold text-sm text-center px-4">
                        📸 Photos available on WhatsApp
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-brand-maroon mb-2 leading-snug">{item.title}</h3>
                    <p className="font-sans text-brand-black/70 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <a
                      href={`https://wa.me/919773602766?text=Hi!%20I%27d%20like%20to%20see%20photos%20from%20${encodeURIComponent(item.title)}%20by%20Kathak%20Shades.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-maroon text-brand-gold px-4 py-2 rounded-full text-xs font-bold hover:bg-brand-maroon/90 transition-colors"
                    >
                      📸 View Photos
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Share CTA */}
        <div className="text-center bg-brand-maroon rounded-2xl p-8 mt-4">
          <p className="font-serif text-2xl font-bold text-brand-gold mb-3">Want to Share Your Moment?</p>
          <p className="font-sans text-brand-cream/80 max-w-lg mx-auto mb-5">
            If you have photos or videos from a Kathak Shades event, we&rsquo;d love to feature them here!
            Reach out to us on WhatsApp.
          </p>
          <a
            href="https://wa.me/919773602766?text=Hi!%20I%20have%20photos%20from%20a%20Kathak%20Shades%20event%20I%27d%20like%20to%20share."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-brand-maroon px-8 py-3 rounded-full font-bold hover:bg-brand-gold/90 transition-colors"
          >
            💬 Share on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
