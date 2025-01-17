import { CircuitBoard, Cpu, Network } from "lucide-react";

const ChipAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Rede neural animada */}
      <div id="particles-js" className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.8 + Math.random() * 0.7})`,
              opacity: 0.7,
            }}
          >
            {i % 3 === 0 ? (
              <CircuitBoard className="w-12 h-12 text-blue-200" />
            ) : i % 3 === 1 ? (
              <Cpu className="w-12 h-12 text-blue-200" />
            ) : (
              <Network className="w-12 h-12 text-blue-200" />
            )}
          </div>
        ))}
      </div>

      {/* Gradiente mais vibrante */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,11,46,0.92) 0%, rgba(0,31,92,0.85) 100%)",
        }}
      />
    </div>
  );
};

export default ChipAnimation;