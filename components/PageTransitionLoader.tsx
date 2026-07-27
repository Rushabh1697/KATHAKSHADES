'use client';

export default function PageTransitionLoader() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <video
        src="/loader.mp4"
        autoPlay
        muted
        playsInline
        // Stop playback at the 2-second mark
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          if (video.currentTime >= 2) {
            video.pause();
          }
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
