export default function Books() {
  const books = [
    {
      title: 'Kathak: An Introduction',
      author: 'Sunil Kothari',
      desc: 'The definitive reference on Kathak\'s history, gharanas, and technique. Essential for every serious student.',
      price: '₹450',
      level: 'All Levels',
      emoji: '🏛️',
      tag: 'Must Read',
    },
    {
      title: 'Nritya Ratnavali',
      author: 'Pundit Birju Maharaj',
      desc: 'The legendary Birju Maharaj\'s personal guide to Kathak compositions, tukras, and parans.',
      price: '₹650',
      level: 'Intermediate+',
      emoji: '🎭',
      tag: 'Classic',
    },
    {
      title: 'Taal Vigyan (Rhythm Science)',
      author: 'Pt. Arvind Mulgaonkar',
      desc: 'Comprehensive guide to Indian classical taal system — teen taal, ektaal, jhaptaal and more.',
      price: '₹380',
      level: 'Beginner+',
      emoji: '🥁',
      tag: 'Taal & Rhythm',
    },
    {
      title: 'Abhinaya Darpana',
      author: 'Nandikesvara (translated)',
      desc: 'The ancient Sanskrit text on classical Indian dance expression — mudras, hastas, and emotions.',
      price: '₹520',
      level: 'Advanced',
      emoji: '🪷',
      tag: 'Classical Text',
    },
    {
      title: 'Laya & Taal: A Practical Guide',
      author: 'Deepak S. Raja',
      desc: 'Learn to understand and count rhythm cycles used in Hindustani classical dance and music.',
      price: '₹320',
      level: 'Beginner',
      emoji: '🎵',
      tag: 'Practical',
    },
    {
      title: 'Kathak Notation Manual Vol. 1',
      author: 'Amruta Todankar',
      desc: 'Handcrafted notation guide for foundational Kathak sequences by our own Guru Amruta Todankar.',
      price: '₹250',
      level: 'Beginner',
      emoji: '📝',
      tag: 'In-House',
    },
    {
      title: 'Ghungroo Ki Awaaz',
      author: 'Birju Maharaj (Hindi)',
      desc: 'An autobiographical journey through Kathak by the master himself. Inspiring and deeply personal.',
      price: '₹400',
      level: 'All Levels',
      emoji: '🔔',
      tag: 'Autobiography',
    },
    {
      title: 'Indian Classical Dance — An Overview',
      author: 'Mohan Khokar',
      desc: 'A beautifully illustrated overview of all 8 classical dance forms including Kathak\'s unique place.',
      price: '₹580',
      level: 'All Levels',
      emoji: '🌺',
      tag: 'Reference',
    },
  ];

  const tagColors: Record<string, string> = {
    'Must Read': 'bg-brand-gold text-brand-maroon',
    'Classic': 'bg-purple-700 text-white',
    'Taal & Rhythm': 'bg-blue-700 text-white',
    'Classical Text': 'bg-rose-700 text-white',
    'Practical': 'bg-teal-700 text-white',
    'In-House': 'bg-brand-maroon text-brand-gold',
    'Autobiography': 'bg-orange-700 text-white',
    'Reference': 'bg-indigo-700 text-white',
  };

  const levels: Record<string, string> = {
    'All Levels': 'text-green-700',
    'Beginner': 'text-teal-700',
    'Beginner+': 'text-teal-600',
    'Intermediate+': 'text-amber-700',
    'Advanced': 'text-red-700',
  };

  return (
    <section id="books" className="py-20 bg-white min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Kathak Shades Library
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
            Books &amp; Resources
          </h1>
          <p className="font-sans text-lg text-brand-black/70 max-w-2xl mx-auto">
            Deepen your understanding of Kathak with our curated collection — from classical texts to rhythm manuals and inspiring biographies.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-brand-maroon/10 border border-brand-maroon/20 rounded-full px-5 py-2">
            <span className="text-brand-maroon text-sm font-sans font-semibold">
              📞 To order: <a href="https://wa.me/919773602766" className="text-brand-gold font-bold hover:underline">WhatsApp +91 97736 02766</a>
            </span>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="bg-brand-cream rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border border-brand-maroon/10 flex flex-col"
            >
              {/* Book Spine Accent */}
              <div className="h-2 bg-gradient-to-r from-brand-gold to-brand-maroon" />

              {/* Icon Area */}
              <div className="bg-brand-maroon flex items-center justify-center h-28 group-hover:bg-brand-maroon/90 transition-colors">
                <span className="text-5xl">{book.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-serif text-base font-bold text-brand-maroon leading-snug">{book.title}</h3>
                </div>
                <p className="font-sans text-brand-black/50 text-xs mb-2 italic">{book.author}</p>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tagColors[book.tag] || 'bg-gray-200 text-gray-700'}`}>
                    {book.tag}
                  </span>
                  <span className={`text-xs font-semibold font-sans ${levels[book.level] || 'text-gray-600'}`}>
                    {book.level}
                  </span>
                </div>

                <p className="font-sans text-brand-black/70 text-xs leading-relaxed mb-4 flex-1">{book.desc}</p>

                <div className="flex items-center justify-between mt-auto">
                  <p className="font-sans text-brand-gold font-bold text-base">{book.price}</p>
                  <a
                    href={`https://wa.me/919773602766?text=Hi!%20I%27m%20interested%20in%20the%20book%20%22${encodeURIComponent(book.title)}%22%20by%20${encodeURIComponent(book.author)}%20from%20Kathak%20Shades.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-full text-xs font-bold hover:bg-brand-maroon/90 transition-colors"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggest a Book */}
        <div className="text-center bg-brand-maroon rounded-2xl p-8">
          <p className="font-serif text-2xl font-bold text-brand-gold mb-3">Can&rsquo;t find what you&rsquo;re looking for?</p>
          <p className="font-sans text-brand-cream/80 max-w-lg mx-auto mb-5">
            We regularly update our library. Suggest a book or resource and we&rsquo;ll try to source it for you.
          </p>
          <a
            href="https://wa.me/919773602766?text=Hi!%20I%20have%20a%20book%20suggestion%20for%20Kathak%20Shades."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-brand-maroon px-8 py-3 rounded-full font-bold hover:bg-brand-gold/90 transition-colors"
          >
            💬 Suggest on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
