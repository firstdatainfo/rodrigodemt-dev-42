const fs = require('fs');
const { createCanvas } = require('canvas');

// Cria um canvas de 64x64 pixels
const canvas = createCanvas(64, 64);
const ctx = canvas.getContext('2d');

// Fundo com gradiente
const gradient = ctx.createLinearGradient(0, 0, 64, 64);
gradient.addColorStop(0, '#10b981');
gradient.addColorStop(1, '#059669');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 64, 64);

// Texto "RD"
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 32px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('RD', 32, 36);

// Salva como PNG
const out = fs.createWriteStream('public/favicon.ico');
const stream = canvas.createPNGStream();
stream.pipe(out);

out.on('finish', () => console.log('Favicon criado com sucesso!'));
