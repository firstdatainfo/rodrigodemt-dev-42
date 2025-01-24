import React, { useEffect, useRef } from 'react';

interface ParticleImageProps {
  imageSrc: string;
  className?: string;
}

class Particle {
  x: number;
  y: number;
  color: string;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  vx: number;
  vy: number;

  constructor(x: number, y: number, color: string) {
    this.x = x + (Math.random() - 0.5) * 1000;
    this.y = y + (Math.random() - 0.5) * 1000;
    this.color = color;
    this.size = 2; // Tamanho fixo para melhor formação da imagem
    this.baseX = x;
    this.baseY = y;
    this.density = (Math.random() * 30) + 1;
    this.vx = 0;
    this.vy = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    const dx = this.baseX - this.x;
    const dy = this.baseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    
    // Força mais forte e constante
    const force = Math.min(distance * 0.1, 15);

    this.vx += forceDirectionX * force;
    this.vy += forceDirectionY * force;

    this.x += this.vx;
    this.y += this.vy;

    // Amortecimento mais forte
    this.vx *= 0.8;
    this.vy *= 0.8;
  }
}

const ParticleImage: React.FC<ParticleImageProps> = ({ imageSrc, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numParticles = 5000; // Aumentei significativamente o número de partículas
    const img = new Image();
    img.src = imageSrc;

    const initParticles = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Primeiro, desenha a imagem no canvas
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = [];
      
      // Cria partículas em intervalos regulares para cobrir toda a imagem
      const gridSize = Math.sqrt((canvas.width * canvas.height) / numParticles);
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += gridSize) {
          const pixelIndex = (Math.floor(y) * imageData.width + Math.floor(x)) * 4;
          const red = imageData.data[pixelIndex];
          const green = imageData.data[pixelIndex + 1];
          const blue = imageData.data[pixelIndex + 2];
          const alpha = imageData.data[pixelIndex + 3];
          
          if (alpha > 128) { // Só cria partículas para pixels não transparentes
            const color = `rgb(${red}, ${green}, ${blue})`;
            particles.current.push(new Particle(x, y, color));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    img.onload = () => {
      initParticles();
      animate();
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [imageSrc]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default ParticleImage;