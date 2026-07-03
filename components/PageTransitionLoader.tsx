'use client';

export default function PageTransitionLoader() {
  return (
    <div className="fixed inset-0 bg-brand-maroon/95 z-50 flex items-center justify-center">
      {/* 3D Heartbeat Logo */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Outer pulsing circle */}
        <div className="absolute inset-0 rounded-full border-2 border-brand-gold animate-heartbeat" />
        
        {/* Middle circle */}
        <div className="absolute inset-2 rounded-full border border-brand-gold/50" 
             style={{
               animation: 'heartbeat 1.5s ease-in-out infinite',
               animationDelay: '0.2s'
             }}
        />
        
        {/* Inner circle - main logo */}
        <div className="relative w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center animate-heartbeat shadow-lg"
             style={{
               boxShadow: '0 0 30px rgba(255, 199, 0, 0.5)',
             }}
        >
          {/* Logo text */}
          <div className="text-center">
            <div className="text-brand-maroon font-serif font-bold text-lg leading-tight">
              KS
            </div>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-20 text-brand-gold font-sans text-sm tracking-widest animate-pulse">
        LOADING...
      </div>
    </div>
  );
}
