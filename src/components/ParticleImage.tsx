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
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = Math.random() * 3 + 1;
    this.baseX = x;
    this.baseY = y;
    this.density = (Math.random() * 30) + 1;
    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.95;
    this.vy *= 0.95;

    const dx = this.baseX - this.x;
    const dy = this.baseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 5) {
      this.x = this.baseX;
      this.y = this.baseY;
    } else {
      this.x += dx / 10;
      this.y += dy / 10;
    }
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

    const numParticles = 500;
    const img = new Image();
    img.src = imageSrc;

    const initParticles = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = [];
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const pixelIndex = (Math.floor(y) * imageData.width + Math.floor(x)) * 4;
        const red = imageData.data[pixelIndex];
        const green = imageData.data[pixelIndex + 1];
        const blue = imageData.data[pixelIndex + 2];
        const color = `rgb(${red}, ${green}, ${blue})`;

        particles.current.push(new Particle(x, y, color));
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