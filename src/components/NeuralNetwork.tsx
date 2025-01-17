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
      
      // Initialize tech logos if not already done
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
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Update tech logos positions with smoother movement
      techLogosRef.current.forEach(logo => {
        // Add slight randomness to movement
        logo.vx += (Math.random() - 0.5) * 0.1;
        logo.vy += (Math.random() - 0.5) * 0.1;
        
        // Limit maximum speed
        logo.vx = Math.max(Math.min(logo.vx, 2), -2);
        logo.vy = Math.max(Math.min(logo.vy, 2), -2);
        
        // Update position
        logo.x += logo.vx;
        logo.y += logo.vy;

        // Bounce off walls with some randomness
        if (logo.x < 0 || logo.x > canvas.width - 32) {
          logo.vx *= -1;
          logo.vx += (Math.random() - 0.5) * 0.5;
        }
        if (logo.y < 0 || logo.y > canvas.height - 32) {
          logo.vy *= -1;
          logo.vy += (Math.random() - 0.5) * 0.5;
        }
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
          className="absolute text-white/50"
          style={{
            left: `${logo.x}px`,
            top: `${logo.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s linear',
          }}
        >
          <logo.Icon size={32} />
        </div>
      ))}
    </div>
  );
};

export default NeuralNetwork;