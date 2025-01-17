import { Brain, Network, Cpu } from "lucide-react";

const ChipAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Neural network animation */}
      <div className="absolute inset-0">
        {/* Neural nodes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Neural connections */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`connection-${i}`}
            className="absolute h-px bg-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `pulse 2s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Floating icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`icon-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.8 + Math.random() * 0.7})`,
              opacity: 0.8,
            }}
          >
            {i % 3 === 0 ? (
              <Brain className="w-16 h-16 text-blue-300" />
            ) : i % 3 === 1 ? (
              <Network className="w-16 h-16 text-blue-300" />
            ) : (
              <Cpu className="w-16 h-16 text-blue-300" />
            )}
          </div>
        ))}
      </div>

      {/* Enhanced gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,11,46,0.94) 0%, rgba(0,31,92,0.92) 100%)",
        }}
      />
    </div>
  );
};

export default ChipAnimation;