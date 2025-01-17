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
  const animationFrameRef = useRef<number>();
  
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

    const initializeTechLogos = () => {
      techLogosRef.current = icons.map((Icon) => ({
        x: Math.random() * (canvas.width - 64),
        y: Math.random() * (canvas.height - 64),
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        Icon,
      }));
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeTechLogos();
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
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
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
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      }
    }

    const nodes: Node[] = Array.from({ length: 50 }, () => 
      new Node(Math.random() * canvas.width, Math.random() * canvas.height)
    );

    const drawConnection = (x1: number, y1: number, x2: number, y2: number, alpha: number) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const updateTechLogos = () => {
      techLogosRef.current.forEach(logo => {
        logo.x += logo.vx;
        logo.y += logo.vy;

        // Bounce off walls
        if (logo.x <= 0 || logo.x >= canvas.width - 32) {
          logo.vx *= -1;
          logo.x = Math.max(0, Math.min(logo.x, canvas.width - 32));
        }
        if (logo.y <= 0 || logo.y >= canvas.height - 32) {
          logo.vy *= -1;
          logo.y = Math.max(0, Math.min(logo.y, canvas.height - 32));
        }
      });
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Draw connections between nodes
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach(node2 => {
          const distance = Math.hypot(node1.x - node2.x, node1.y - node2.y);
          if (distance < 100) {
            drawConnection(node1.x, node1.y, node2.x, node2.y, 1 - distance / 100);
          }
        });
      });

      // Update tech logos positions
      updateTechLogos();

      // Draw connections between logos and nodes
      techLogosRef.current.forEach(logo => {
        nodes.forEach(node => {
          const distance = Math.hypot(logo.x + 16 - node.x, logo.y + 16 - node.y);
          if (distance < 150) {
            drawConnection(logo.x + 16, logo.y + 16, node.x, node.y, 0.5 - distance / 300);
          }
        });

        // Draw connections between logos
        techLogosRef.current.forEach(otherLogo => {
          if (logo === otherLogo) return;
          const distance = Math.hypot(
            logo.x + 16 - (otherLogo.x + 16),
            logo.y + 16 - (otherLogo.y + 16)
          );
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

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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
            transform: 'translate(0, 0)',
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