import { CircuitBoard, Cpu } from "lucide-react";

const ChipAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Partículas animadas */}
      <div id="particles-js" className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          >
            {i % 2 === 0 ? (
              <CircuitBoard className="w-8 h-8 text-white/30" />
            ) : (
              <Cpu className="w-8 h-8 text-white/30" />
            )}
          </div>
        ))}
      </div>

      {/* Gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-95" />
    </div>
  );
};

export default ChipAnimation;