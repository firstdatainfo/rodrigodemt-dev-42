import React, { useEffect, useRef } from 'react';
import {
  SiNodedotjs,
  SiReact,
  SiPython,
  SiFirebase,
  SiFlutter,
  SiSupabase,
  SiEspressif,
  SiJavascript,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

interface TechLogo {
  x: number;
  y: number;
  vx: number;
  vy: number;
  Icon: React.ComponentType<{ size?: number | string }>;
}

const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const techLogosRef = useRef<TechLogo[]>([]);
  const icons = [
    SiNodedotjs,
    SiReact,
    SiPython,
    SiFirebase,
    SiFlutter,
    SiSupabase,
    SiEspressif,
    SiJavascript,
    SiTypescript,
    SiFigma,
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Inicializar as logos com posições e velocidades aleatórias
      if (techLogosRef.current.length === 0) {
        techLogosRef.current = icons.map((Icon) => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          Icon,
        }));
      }
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Node {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
    }

    const nodes: Node[] = [];
    for (let i = 0; i < 50; i++) {
      nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    const drawConnection = (x1: number, y1: number, x2: number, y2: number, alpha: number) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach(node2 => {
          const distance = Math.hypot(node1.x - node2.x, node1.y - node2.y);
          if (distance < 100) {
            drawConnection(node1.x, node1.y, node2.x, node2.y, 1 - distance / 100);
          }
        });
      });

      // Atualizar movimento das logos
      techLogosRef.current.forEach(logo => {
        // Atualizar posição
        logo.x += logo.vx;
        logo.y += logo.vy;

        // Verificar colisões com as bordas
        if (logo.x < 0 || logo.x > canvas.width - 32) {
          logo.vx *= -1;
        }
        if (logo.y < 0 || logo.y > canvas.height - 32) {
          logo.vy *= -1;
        }

        // Desenhar conexões com nós próximos
        nodes.forEach(node => {
          const distance = Math.hypot(logo.x - node.x, logo.y - node.y);
          if (distance < 150) {
            drawConnection(logo.x + 16, logo.y + 16, node.x, node.y, 0.5 - distance / 300);
          }
        });

        // Desenhar conexões entre logos próximas
        techLogosRef.current.forEach(otherLogo => {
          if (logo === otherLogo) return;
          const distance = Math.hypot(logo.x - otherLogo.x, logo.y - otherLogo.y);
          if (distance < 200) {
            drawConnection(
              logo.x + 16,
              logo.y + 16,
              otherLogo.x + 16,
              otherLogo.y + 16,
              0.3 - distance / 600
            );
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      {techLogosRef.current.map((logo, index) => (
        <div
          key={index}
          className="absolute text-white/90"
          style={{
            left: `${logo.x}px`,
            top: `${logo.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s linear',
            zIndex: 10,
          }}
        >
          <logo.Icon size={32} />
        </div>
      ))}
    </div>
  );
};

export default NeuralNetwork;