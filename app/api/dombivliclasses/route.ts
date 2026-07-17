import { NextResponse } from 'next/server';

export async function GET() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json({ photos: [] });
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/tags/dombivliclasses?max_results=12`;
  const authorization = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${authorization}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json({ photos: [] });
    }

    const data: { resources?: Array<{ secure_url?: string }> } = await response.json();
    const photos = (data.resources ?? [])
      .map((resource) => resource.secure_url)
      .filter((url): url is string => typeof url === 'string' && url.length > 0);

    return NextResponse.json({ photos });
  } catch {
    return NextResponse.json({ photos: [] });
  }
}
