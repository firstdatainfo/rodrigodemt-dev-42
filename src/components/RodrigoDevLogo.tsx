
import React from 'react';

interface RodrigoDevLogoProps {
  className?: string;
  size?: number;
}

const RodrigoDevLogo: React.FC<RodrigoDevLogoProps> = ({ className = "", size = 320 }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full"
      >
        {/* Fundo com gradiente */}
        <rect 
          width="320" 
          height="320" 
          rx="40" 
          fill="url(#logoGradient)" 
        />
        
        {/* Efeito de brilho */}
        <rect 
          width="320" 
          height="320" 
          rx="40" 
          fill="url(#shineGradient)" 
          opacity="0.3" 
        />
        
        {/* Círculo decorativo */}
        <circle 
          cx="160" 
          cy="160" 
          r="120" 
          stroke="url(#circleGradient)" 
          strokeWidth="3" 
          fill="none" 
          opacity="0.4"
        />
        
        {/* Texto principal "RD" */}
        <text
          x="160"
          y="180"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="96"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          style={{ 
            filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))',
            letterSpacing: '-2px'
          }}
        >
          RD
        </text>
        
        {/* Texto "DEV" */}
        <text
          x="160"
          y="240"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#22c55e"
          fontSize="24"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          style={{ 
            filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
            letterSpacing: '4px'
          }}
        >
          DEV
        </text>
        
        {/* Texto "MT" */}
        <text
          x="160"
          y="270"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#10b981"
          fontSize="18"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
          style={{ 
            filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
            letterSpacing: '2px'
          }}
        >
          MT
        </text>
        
        {/* Elementos decorativos */}
        <circle cx="80" cy="80" r="4" fill="#22c55e" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="80" r="3" fill="#10b981" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="240" r="3" fill="#16a34a" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="240" r="4" fill="#059669" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        {/* Definições de gradientes */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          
          <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="transparent" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Efeito de brilho ao redor */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-[40px] blur-xl opacity-50 -z-10 animate-pulse"></div>
    </div>
  );
};

export default RodrigoDevLogo;
