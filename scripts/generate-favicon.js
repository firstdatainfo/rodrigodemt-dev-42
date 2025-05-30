import { createCanvas } from 'canvas';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cria um canvas de 64x64 pixels
const size = 64;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Fundo com gradiente
const gradient = ctx.createLinearGradient(0, 0, size, size);
gradient.addColorStop(0, '#10b981'); // verde-400
gradient.addColorStop(1, '#059669'); // emerald-600

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, size, size);

// Texto "RD"
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 32px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('RD', size / 2, size / 2);

// Salva como ICO
const out = createWriteStream(join(__dirname, '../public/favicon.ico'));
const stream = canvas.createPNGStream();
stream.pipe(out);

out.on('finish', () => {
  console.log('Favicon gerado com sucesso em public/favicon.ico');
});
