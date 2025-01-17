import React from 'react';
import { CircuitBoard, Cpu } from 'lucide-react';

const ChipAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Partículas de fundo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {i % 2 === 0 ? (
              <CircuitBoard className="w-8 h-8 text-white" />
            ) : (
              <Cpu className="w-8 h-8 text-white" />
            )}
          </div>
        ))}
      </div>

      {/* Efeito de gradiente adicional */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/50" />
    </div>
  );
};

export default ChipAnimation;