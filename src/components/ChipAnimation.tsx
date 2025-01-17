import { CircuitBoard, Cpu } from "lucide-react";

const ChipAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Partículas animadas com maior visibilidade */}
      <div id="particles-js" className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `scale(${0.8 + Math.random() * 0.7})`,
              opacity: 0.6,
            }}
          >
            {i % 2 === 0 ? (
              <CircuitBoard className="w-10 h-10 text-white" />
            ) : (
              <Cpu className="w-10 h-10 text-white" />
            )}
          </div>
        ))}
      </div>

      {/* Gradiente mais suave e vibrante */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90"
        style={{
          background: "linear-gradient(135deg, rgba(0,11,46,0.95) 0%, rgba(0,31,92,0.90) 100%)",
        }}
      />
    </div>
  );
};

export default ChipAnimation;