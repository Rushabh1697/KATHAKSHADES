'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function HomeVideo() {
  return (
    <CldVideoPlayer
      width="1920"
      height="1080"
      src="homevideo"
      className="w-full h-full object-cover rounded-[16px]"
    />
  );
}
