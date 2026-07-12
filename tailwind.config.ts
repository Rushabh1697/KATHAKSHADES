import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#4A0F1D', // Deep Maroon
          gold: '#B35C11', // Accent Gold
          'gold-dark': '#8F460D', // For gradients
          'gold-light': '#D5832A', // For gradients
          'gold-hover': '#C96A16',
          cream: '#FFF8EE', // Cream
          black: '#2E1A12', // Dark Text
          light: '#FFF7EE', // Light Text
          brown: '#7B4A2E', // Muted Brown
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        pageTurn: {
          '0%': { transform: 'rotateY(0deg) translateX(0px) translateY(0px)', opacity: '1' },
          '20%': { transform: 'rotateY(0deg) translateX(0px) translateY(0px)', opacity: '1' },
          '45%': { transform: 'rotateY(-30deg) translateX(18px) translateY(-4px)', opacity: '0.95' },
          '70%': { transform: 'rotateY(-120deg) translateX(36px) translateY(0px)', opacity: '0.82' },
          '100%': { transform: 'rotateY(-180deg) translateX(48px) translateY(4px)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        pageTurn: 'pageTurn 10s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
export default config
