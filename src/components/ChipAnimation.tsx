import React from 'react';
import { Circuit, Cpu } from 'lucide-react';

const ChipAnimation = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-xl">
      {/* Galáxia animada */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              backgroundColor: '#fff',
              boxShadow: '0 0 10px #fff',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Microchip central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Cpu 
            className="w-24 h-24 text-primary animate-pulse" 
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0, 70, 187, 0.5))'
            }}
          />
          
          {/* Linhas de conexão */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[200px] h-[2px] bg-gradient-to-r from-primary to-transparent origin-left"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg)`,
                animation: 'pulse 2s infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Circuitos animados */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <Circuit
            key={i}
            className="absolute text-primary/30 animate-pulse"
            style={{
              width: '100px',
              height: '100px',
              left: `${25 + i * 20}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChipAnimation;