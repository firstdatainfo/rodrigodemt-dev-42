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
    this.x = x + (Math.random() - 0.5) * 1000; // Espalha as partículas mais longe
    this.y = y + (Math.random() - 0.5) * 1000;
    this.color = color;
    this.size = Math.random() * 3 + 1;
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
    // Calcula a direção para a posição base
    const dx = this.baseX - this.x;
    const dy = this.baseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Aumenta a velocidade de retorno
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const force = (distance - 5) / 5; // Força mais forte para juntar mais rápido

    // Aplica a força
    this.vx += forceDirectionX * force;
    this.vy += forceDirectionY * force;

    // Atualiza a posição
    this.x += this.vx;
    this.y += this.vy;

    // Amortecimento mais forte para parar mais rápido
    this.vx *= 0.85;
    this.vy *= 0.85;
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

    const numParticles = 1000; // Aumentei o número de partículas
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