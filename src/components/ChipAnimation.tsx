import React, { useEffect, useRef } from 'react';
import { CircuitBoard, Cpu } from 'lucide-react';

const ChipAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamanho do canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Partículas
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Criar partículas iniciais
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random(),
      });
    }

    // Função de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar partículas
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 163, 255, ${particle.opacity})`;
        ctx.fill();

        // Mover partículas
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reposicionar partículas que saem da tela
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Variar opacidade
        particle.opacity += (Math.random() - 0.5) * 0.01;
        if (particle.opacity < 0) particle.opacity = 0;
        if (particle.opacity > 1) particle.opacity = 1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #000B2E 0%, #001F5C 100%)' }}
      />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex gap-8 items-center">
          <div className="animate-float">
            <CircuitBoard className="w-16 h-16 text-primary-light" />
          </div>
          <div className="animate-pulse">
            <Cpu className="w-24 h-24 text-white" />
          </div>
          <div className="animate-float">
            <CircuitBoard className="w-16 h-16 text-primary-light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipAnimation;