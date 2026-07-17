import { NextResponse } from 'next/server';

export async function GET() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'dnnnouh5x';
  const tag = 'workshops';
  const publicListUrl = `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`;

  try {
    const response = await fetch(publicListUrl, { cache: 'no-store' });
    if (response.ok) {
      const data: { resources?: Array<{ version: number; public_id: string }> } = await response.json();
      if (Array.isArray(data.resources) && data.resources.length > 0) {
        const photos = data.resources.map(
          (r) => `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/v${r.version}/${r.public_id}.jpg`
        );
        return NextResponse.json({ photos });
      }
    }
  } catch {
    // fallback
  }

  return NextResponse.json({ photos: [] });
}
