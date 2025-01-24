import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  size: number;
}

interface MagicParticlesProps {
  imageSrc: string;
  className?: string;
}

const MagicParticles = ({ imageSrc, className = '' }: MagicParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationStartRef = useRef<number>(0);
  const requestRef = useRef<number>();

  const PARTICLE_SPACING = 4;
  const ANIMATION_DURATION = 200; // Reduzido para 200 milissegundos
  const PARTICLE_SIZE = 1.5;

  const initParticles = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const scale = Math.min(
      window.innerWidth / img.naturalWidth,
      window.innerHeight / img.naturalHeight
    );
    
    const canvas = canvasRef.current!;
    canvas.width = img.naturalWidth * scale;
    canvas.height = img.naturalHeight * scale;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles: Particle[] = [];
    
    for(let y = 0; y < canvas.height; y += PARTICLE_SPACING) {
      for(let x = 0; x < canvas.width; x += PARTICLE_SPACING) {
        const pixelIndex = (y * canvas.width + x) * 4;
        const r = imageData.data[pixelIndex];
        const g = imageData.data[pixelIndex + 1];
        const b = imageData.data[pixelIndex + 2];
        const a = imageData.data[pixelIndex + 3];
        
        if(a > 200) { // Apenas pixels totalmente opacos
          particles.push({
            targetX: x,
            targetY: y,
            x: x, // Começa na posição final
            y: y, // Começa na posição final
            color: `rgba(${r},${g},${b},${a/255})`,
            size: PARTICLE_SIZE
          });
        }
      }
    }

    particlesRef.current = particles;
    animationStartRef.current = Date.now();
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animate = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const elapsed = Date.now() - animationStartRef.current;
    const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
    
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

    if (progress >= 1) {
      // Quando a animação termina, desenha a imagem real
      ctx.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
      return;
    }

    particlesRef.current.forEach(particle => {
      const currentX = particle.x + (particle.targetX - particle.x) * easeInOutQuad(progress);
      const currentY = particle.y + (particle.targetY - particle.y) * easeInOutQuad(progress);
      
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(currentX, currentY, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });

    if(progress < 1) {
      requestRef.current = requestAnimationFrame(() => animate(ctx, img));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      initParticles(ctx, img);
      animate(ctx, img);

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles(ctx, img);
        }
      };

      window.addEventListener('resize', handleResize);
      
      const handleClick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationStartRef.current = Date.now();
        animate(ctx, img);
      };

      canvas.addEventListener('click', handleClick);

      return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('click', handleClick);
      };
    };

    img.src = imageSrc;

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [imageSrc]);

  return (
    <canvas 
      ref={canvasRef}
      className={className}
    />
  );
};

export default MagicParticles;
