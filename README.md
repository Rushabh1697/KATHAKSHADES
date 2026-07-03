# 🎭 KATHAK SHADES - Classical Dance Academy Website

A professional, responsive, multi-page website for **KATHAK SHADES**, a classical Kathak dance academy. Built with **Next.js**, **TypeScript**, and **Tailwind CSS** with a premium traditional Indian aesthetic.

## 🎨 Design Features

### Brand Colors (Tailwind Theme)
- **Primary Maroon**: `#5C0612` - Deep, sophisticated base color
- **Accent Gold**: `#FFC700` - Bright, energetic highlights
- **Muted Gold**: `#C59B4E` - Elegant secondary accents
- **Cream Background**: `#F5EAD4` - Warm, inviting backdrop
- **Dark Text**: `#260205` - Premium contrast

### Typography
- **Serif Headings**: Playfair Display (elegant, classical)
- **Body Text**: Poppins (clean, modern, readable)

## 📱 Pages & Features

### 1. **Hero Page (Home)**
- Immersive full-screen background
- Dark vignette overlay for text readability
- Bold "KATHAK SHADES" headline
- Prominent "Book a Trial Class" CTA button
- Smooth scroll navigation

### 2. **Classes & Catalogue**
- Interactive tabbed interface for multiple studios:
  - Dombivli East Studio
  - Thane West Studio
  - Online Interactive Batches
- Clean, maroon-tinted cards with gold borders
- Batch information:
  - Skill levels (Kids, Teens, Adults, Advanced)
  - Schedule/timings
  - Duration
  - Enquiry buttons

### 3. **About GURU**
- Sophisticated split-column layout:
  - Left: Guru portrait placeholder (high-quality image ready)
  - Right: Biographical narrative
- Training lineage and Gharana background
- Certifications and achievements
- Teaching philosophy
- Styled information cards

### 4. **Contact Section**
- Beautiful layout with studio addresses
- Social media links (Facebook, Instagram, YouTube, WhatsApp)
- Structured contact form with fields:
  - Full Name
  - Contact Number
  - Preferred Location (Dropdown)
  - Message/Query Description
- **Smart WhatsApp Integration**:
  - Form submission dynamically generates WhatsApp message
  - Pre-filled message format with user details
  - Seamless redirect to WhatsApp API (`https://wa.me/919773602766`)

### 5. **Page Transition & 3D Loader**
- Global page layout wrapper intercepts route changes
- Full-screen loading overlay with:
  - 3D-styled circular brand logo
  - Rhythmic heartbeat pulsating animation
  - Elegant loading text

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Rushabh1697/KATHAKSHADES.git
cd KATHAKSHADES

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
KATHAKSHADES/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page (single-page scrolling)
│   └── globals.css             # Global styles with font imports
├── components/
│   ├── Navigation.tsx          # Fixed navigation bar
│   ├── PageTransitionLoader.tsx # 3D heartbeat loader
│   ├── RootLayoutClient.tsx     # Client-side layout wrapper
│   └── pages/
│       ├── Hero.tsx            # Hero/Home section
│       ├── Classes.tsx         # Classes & batches showcase
│       ├── About.tsx           # About Guru section
│       └── Contact.tsx         # Contact form & social links
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind theme configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── .eslintrc.json              # ESLint configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎯 Key Components

### PageTransitionLoader
Displays a 3D heartbeat animation during page transitions. Automatically triggered when route changes occur.

```tsx
// Heartbeat animation with pulsing circles
// 1.5s infinite animation cycle
// Gold color with shadow effect
```

### Navigation
Sticky navigation bar with:
- Logo and brand name
- Smooth scroll links to sections
- Mobile-responsive hamburger menu
- Gold highlight for active interactions

### Contact Form Integration
Form data is captured and formatted into a WhatsApp message:

```
Hello Kathak Shades! I would like to inquire about your classes.
Here are my details:
- *Name:* [User Name]
- *Contact:* [User Phone]
- *Preferred Location:* [Location Selection]
- *Query:* [User Message description]
```

Then redirects to: `https://wa.me/919773602766?text=[encoded_message]`

## 🎬 Animations

- **Heartbeat**: Pulsating scale effect (1.5s cycle)
- **Fade In**: Smooth opacity transition (0.8s)
- **Slide Up**: Upward movement with fade (0.6s)
- **Hover Effects**: Scale and shadow transformations

## 🛠️ Customization

### Update Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  brand: {
    maroon: '#5C0612',
    gold: '#FFC700',
    // ...
  },
}
```

### Add Gallery Images
Place images in `public/` and update:
- Hero background
- Guru portrait in About section
- Class demonstration images

### Update Studio Information
Edit `components/pages/Classes.tsx` - `studios` array for locations, addresses, and batch details.

### Update Guru Information
Edit `components/pages/About.tsx` to add:
- Guru's actual portrait
- Detailed biographical information
- Additional certifications

## 📞 Contact Integration

WhatsApp contact: `+91 9773602766`

To update, modify the phone number in:
- `components/pages/Contact.tsx` (form submission)
- Navigation CTA buttons

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo, deploy automatically
- **AWS**: Use Next.js deployment guide
- **Self-hosted**: Build and deploy Docker container

## 📦 Dependencies

- **next**: React framework
- **react/react-dom**: UI library
- **tailwindcss**: Utility-first CSS
- **typescript**: Type safety
- **autoprefixer**: CSS vendor prefixes
- **postcss**: CSS processing

## 🔒 Environment Variables

Create `.env.local` (optional):
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919773602766
```

## 📄 License

This project is proprietary and created for KATHAK SHADES.

## 👨‍💻 Support

For questions or feature requests, contact via WhatsApp: +91 9773602766

---

**Built with ❤️ for KATHAK SHADES - The School of Kathak**
