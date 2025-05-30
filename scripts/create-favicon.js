import sharp from 'sharp';
import { writeFileSync } from 'fs';

async function createFavicon() {
  try {
    const svg = `
      <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#059669"/>
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="12" fill="url(#gradient)"/>
        <text x="32" y="42" font-family="Arial" font-size="32" font-weight="bold" text-anchor="middle" fill="white">RD</text>
      </svg>
    `;

    // Converte SVG para PNG
    const pngBuffer = await sharp(Buffer.from(svg))
      .resize(64, 64)
      .png()
      .toBuffer();

    // Converte PNG para ICO
    await sharp(pngBuffer)
      .resize(32, 32)
      .toFile('public/favicon.ico');

    console.log('Favicon.ico criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar favicon:', error);
  }
}

createFavicon();
