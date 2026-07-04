const fs = require('fs');

const files = [
  {
    path: 'app/page.tsx',
    replacements: [
      { search: 'import Navigation from "@/components/Navigation";\nimport Hero from "@/components/pages/Hero";\nimport type { Metadata } from "next";', replace: 'import Navigation from "@/components/Navigation";\nimport Hero from "@/components/pages/Hero";\nimport { Landmark, CalendarDays, Clock, Users, Shirt, BookOpen, Phone } from "lucide-react";\nimport type { Metadata } from "next";' },
      { search: '<span className="text-2xl">🏛️</span>', replace: '<Landmark className="w-7 h-7 text-brand-gold" />', all: true },
      { search: '<span className="text-brand-gold text-lg">📅</span>', replace: '<CalendarDays className="w-5 h-5 text-brand-gold" />', all: true },
      { search: '<span className="text-brand-gold text-lg">🕖</span>', replace: '<Clock className="w-5 h-5 text-brand-gold" />', all: true },
      { search: 'icon: \'💃\'', replace: 'icon: <Users className="w-10 h-10 text-brand-gold" />' },
      { search: 'icon: \'👘\'', replace: 'icon: <Shirt className="w-10 h-10 text-brand-gold" />' },
      { search: 'icon: \'📚\'', replace: 'icon: <BookOpen className="w-10 h-10 text-brand-gold" />' },
      { search: 'icon: \'📞\'', replace: 'icon: <Phone className="w-10 h-10 text-brand-gold" />' },
      { search: '<div className="text-4xl">{item.icon}</div>', replace: '<div>{item.icon}</div>' },
      { search: '📞 +91 97736 02766', replace: '<span className="flex items-center justify-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-gold" /> +91 97736 02766</span>' }
    ]
  },
  {
    path: 'components/Footer.tsx',
    replacements: [
      { search: 'import Link from \'next/link\';\n\nexport default function Footer() {', replace: 'import Link from \'next/link\';\nimport { Landmark, Phone } from \'lucide-react\';\n\nexport default function Footer() {' },
      { search: '📞 +91 97736 02766', replace: '<span className="flex items-center justify-center md:justify-start gap-2"><Phone className="w-3.5 h-3.5 text-brand-gold" /> +91 97736 02766</span>' },
      { search: '<p className="font-sans font-semibold text-brand-cream text-sm">🏛️ Dombivli East</p>', replace: '<p className="font-sans font-semibold text-brand-cream text-sm flex items-center gap-2"><Landmark className="w-4 h-4 text-brand-gold" /> Dombivli East</p>' },
      { search: '<p className="font-sans font-semibold text-brand-cream text-sm">🏛️ Thane West</p>', replace: '<p className="font-sans font-semibold text-brand-cream text-sm flex items-center gap-2"><Landmark className="w-4 h-4 text-brand-gold" /> Thane West</p>' }
    ]
  },
  {
    path: 'components/pages/Classes.tsx',
    replacements: [
      { search: 'import { useState } from \'react\';', replace: 'import { useState } from \'react\';\nimport { CalendarDays, Clock, Phone, MapPin, MessageCircle, ClipboardList, GraduationCap } from \'lucide-react\';' },
      { search: '<span>📅</span> Class Schedule', replace: '<CalendarDays className="w-6 h-6 text-brand-gold" /> Class Schedule' },
      { search: '<span>📞</span> Contact', replace: '<Phone className="w-6 h-6 text-brand-gold" /> Contact' },
      { search: '<span>📍</span> Address', replace: '<MapPin className="w-6 h-6 text-brand-gold" /> Address' },
      { search: '<span>💬</span> Enquire on WhatsApp', replace: '<MessageCircle className="w-5 h-5 text-white" /> Enquire on WhatsApp' },
      { search: '📋 Fill Enquiry Form', replace: '<ClipboardList className="w-5 h-5 text-brand-maroon" /> Fill Enquiry Form' },
      { search: '🎓 Classes are open for all age groups. Contact us to know the batch that suits you best!', replace: '<span className="flex items-center justify-center gap-2"><GraduationCap className="w-6 h-6 text-brand-maroon flex-shrink-0" /> Classes are open for all age groups. Contact us to know the batch that suits you best!</span>' }
    ]
  },
  {
    path: 'components/pages/Contact.tsx',
    replacements: [
      { search: 'import { useState, FormEvent } from \'react\';', replace: 'import { useState, FormEvent } from \'react\';\nimport { Landmark, CalendarDays, Clock, Phone, Globe, MessageCircle, Instagram, Facebook, Youtube } from \'lucide-react\';' },
      { search: '<h3 className="font-serif text-xl font-bold text-brand-gold mb-1">🏛️ Dombivli East</h3>', replace: '<h3 className="font-serif text-xl font-bold text-brand-gold mb-1 flex items-center gap-2"><Landmark className="w-5 h-5" /> Dombivli East</h3>' },
      { search: '<h3 className="font-serif text-xl font-bold text-brand-gold mb-1">🏛️ Thane West</h3>', replace: '<h3 className="font-serif text-xl font-bold text-brand-gold mb-1 flex items-center gap-2"><Landmark className="w-5 h-5" /> Thane West</h3>' },
      { search: '<span className="text-brand-gold font-bold">📅 Days:</span>', replace: '<span className="text-brand-gold font-bold inline-flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Days:</span>', all: true },
      { search: '<span className="text-brand-gold font-bold">🕖 Timing:</span>', replace: '<span className="text-brand-gold font-bold inline-flex items-center gap-1"><Clock className="w-4 h-4" /> Timing:</span>', all: true },
      { search: '<span className="text-brand-gold font-bold">📞 Kathak Shades:</span>', replace: '<span className="text-brand-gold font-bold inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Kathak Shades:</span>', all: true },
      { search: '<span className="text-brand-gold font-bold">📞 Kidz Kingdom:</span>', replace: '<span className="text-brand-gold font-bold inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Kidz Kingdom:</span>', all: true },
      { search: '<span className="text-brand-gold font-bold">📞 Kinder Hive:</span>', replace: '<span className="text-brand-gold font-bold inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Kinder Hive:</span>', all: true },
      { search: '<h3 className="font-serif text-xl font-bold text-brand-gold mb-5">🌐 Follow Us</h3>', replace: '<h3 className="font-serif text-xl font-bold text-brand-gold mb-5 flex items-center gap-2"><Globe className="w-5 h-5" /> Follow Us</h3>' },
      { search: '{ label: \'WhatsApp\', href: \'https://wa.me/919773602766\', icon: \'💬\' },', replace: '{ label: \'WhatsApp\', href: \'https://wa.me/919773602766\', icon: <MessageCircle className="w-5 h-5" /> },' },
      { search: '{ label: \'Instagram\', href: \'https://instagram.com\', icon: \'📷\' },', replace: '{ label: \'Instagram\', href: \'https://instagram.com\', icon: <Instagram className="w-5 h-5" /> },' },
      { search: '{ label: \'Facebook\', href: \'https://facebook.com\', icon: \'f\' },', replace: '{ label: \'Facebook\', href: \'https://facebook.com\', icon: <Facebook className="w-5 h-5" /> },' },
      { search: '{ label: \'YouTube\', href: \'https://youtube.com\', icon: \'▶\' },', replace: '{ label: \'YouTube\', href: \'https://youtube.com\', icon: <Youtube className="w-5 h-5" /> },' },
      { search: '💬 Contact via WhatsApp', replace: '<span className="flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Contact via WhatsApp</span>' }
    ]
  },
  {
    path: 'components/pages/About.tsx',
    replacements: [
      { search: '\'use client\';\n\nexport default function About() {', replace: '\'use client\';\n\nimport { User, GraduationCap, Award, Heart } from \'lucide-react\';\n\nexport default function About() {' },
      { search: '<div className="text-6xl mb-4">🎭</div>', replace: '<div className="flex justify-center mb-4"><User className="w-16 h-16 text-brand-gold" /></div>' },
      { search: '🎓 Training & Lineage', replace: '<span className="flex items-center gap-2"><GraduationCap className="w-6 h-6" /> Training & Lineage</span>' },
      { search: '📜 Certifications & Achievements', replace: '<span className="flex items-center gap-2"><Award className="w-6 h-6" /> Certifications & Achievements</span>' },
      { search: '💝 Teaching Philosophy', replace: '<span className="flex items-center gap-2"><Heart className="w-6 h-6" /> Teaching Philosophy</span>' }
    ]
  },
  {
    path: 'components/pages/Books.tsx',
    replacements: [
      { search: 'export default function Books() {', replace: 'import { Phone, Bell, Info, BookOpen, MessageCircle, GraduationCap } from \'lucide-react\';\n\nexport default function Books() {' },
      { search: '📞 To order:', replace: '<Phone className="w-4 h-4 inline-block -mt-0.5" /> To order:' },
      { search: '<span className="text-5xl opacity-70">🔔</span>', replace: '<Bell className="w-12 h-12 text-brand-gold opacity-70" />' },
      { search: '<span className="text-xl">🙏</span>', replace: '<Info className="w-6 h-6 text-red-700" />' },
      { search: '<span className="text-xl">📖</span>', replace: '<BookOpen className="w-6 h-6 text-green-700" />' },
      { search: '📖 Book Your Copy', replace: '<BookOpen className="w-5 h-5 inline-block" /> Book Your Copy' },
      { search: '🎓 This handbook is recommended', replace: '<GraduationCap className="w-5 h-5 inline-block -mt-1 mr-1" /> This handbook is recommended' },
      { search: '💬 Chat on WhatsApp', replace: '<span className="flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</span>' }
    ]
  },
  {
    path: 'components/pages/Catalogue.tsx',
    replacements: [
      { search: 'export default function Catalogue() {', replace: 'import { Star, GraduationCap, Sparkles, Camera, MessageCircle } from \'lucide-react\';\n\nexport default function Catalogue() {' },
      { search: 'emoji: \'🎭\',', replace: 'emoji: <Star className="w-10 h-10 text-brand-maroon" />,' },
      { search: 'emoji: \'🎓\',', replace: 'emoji: <GraduationCap className="w-10 h-10 text-brand-maroon" />,' },
      { search: 'emoji: \'🌟\',', replace: 'emoji: <Sparkles className="w-10 h-10 text-brand-maroon" />,' },
      { search: 'emoji: \'✨\',', replace: 'emoji: <Sparkles className="w-10 h-10 text-brand-maroon" />,' },
      { search: '<span className="text-4xl">{cat.emoji}</span>', replace: '<div className="flex items-center justify-center w-10 h-10">{cat.emoji}</div>' },
      { search: '<span className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-500">{cat.emoji}</span>', replace: '<div className="opacity-30 group-hover:scale-110 transition-transform duration-500 [&>svg]:w-20 [&>svg]:h-20 [&>svg]:text-brand-gold">{cat.emoji}</div>' },
      { search: '📸 Photos available on WhatsApp', replace: '<span className="flex items-center justify-center gap-2"><Camera className="w-4 h-4" /> Photos available on WhatsApp</span>' },
      { search: '📸 View Photos', replace: '<span className="flex items-center gap-2"><Camera className="w-4 h-4" /> View Photos</span>' },
      { search: '💬 Share on WhatsApp', replace: '<span className="flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> Share on WhatsApp</span>' }
    ]
  }
];

files.forEach(f => {
  let content = fs.readFileSync(f.path, 'utf8');
  f.replacements.forEach(r => {
    if (r.all) {
      content = content.split(r.search).join(r.replace);
    } else {
      content = content.replace(r.search, r.replace);
    }
  });
  fs.writeFileSync(f.path, content, 'utf8');
  console.log(`Updated ${f.path}`);
});
