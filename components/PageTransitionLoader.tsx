'use client';

export default function PageTransitionLoader() {
  return (
    <div className="fixed inset-0 bg-brand-maroon/95 z-50 flex flex-col items-center justify-center gap-6">

      {/* Pulsing rings — same rhythmic feel as the old loader */}
      <div className="relative flex items-center justify-center">

        {/* Outer ring */}
        <div
          className="absolute rounded-full border-2 border-brand-gold"
          style={{
            width: '176px',
            height: '176px',
            animation: 'heartbeat 1.5s ease-in-out infinite',
          }}
        />

        {/* Middle ring */}
        <div
          className="absolute rounded-full border border-brand-gold/50"
          style={{
            width: '160px',
            height: '160px',
            animation: 'heartbeat 1.5s ease-in-out infinite',
            animationDelay: '0.2s',
          }}
        />

        {/* Gold glow shadow ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: '140px',
            height: '140px',
            boxShadow: '0 0 30px rgba(179, 92, 17, 0.5)',
            animation: 'heartbeat 1.5s ease-in-out infinite',
            animationDelay: '0.1s',
          }}
        />

        {/* Circle video clip — girl is visible and centred */}
        <div
          className="relative rounded-full overflow-hidden border-4 border-brand-gold"
          style={{ width: '132px', height: '132px' }}
        >
          <video
            src="/loader.mp4"
            autoPlay
            muted
            playsInline
            onTimeUpdate={(e) => {
              const video = e.currentTarget;
              if (video.currentTime >= 2) {
                video.pause();
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              // Shift the crop upward slightly so the girl's face/body is centred
              objectPosition: 'center 20%',
            }}
          />
        </div>
      </div>

      {/* Loading label — same as before */}
      <div className="text-brand-gold font-sans text-sm tracking-widest animate-pulse">
        LOADING...
      </div>
    </div>
  );
}
