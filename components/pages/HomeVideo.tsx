'use client';

import { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-[16px] overflow-hidden group">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dnnnouh5x/video/upload/v1787121443/qizyhgfrhekrjsev6ect.mp4"
        className="w-full h-full object-cover absolute inset-0"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Custom Controls Overlay */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-brand-maroon hover:text-brand-gold transition-all shadow-lg"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-brand-maroon hover:text-brand-gold transition-all shadow-lg"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
