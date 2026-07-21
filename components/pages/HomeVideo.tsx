'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function HomeVideo() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName || cloudName === 'demo') {
    return (
      <div className="w-full h-full min-h-[300px] bg-brand-gold/10 flex items-center justify-center rounded-[16px] border border-brand-gold/30">
        <p className="text-brand-maroon/70 text-sm font-medium text-center px-4">
          Video Player Placeholder<br/>
          <span className="text-xs font-light">(Configure NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME to activate)</span>
        </p>
      </div>
    );
  }

  return (
    <CldVideoPlayer
      width="1920"
      height="1080"
      src="homevideo"
      className="w-full h-full object-cover rounded-[16px]"
    />
  );
}
