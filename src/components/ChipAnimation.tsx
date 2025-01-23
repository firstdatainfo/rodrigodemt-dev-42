import { CircuitBoard, Cpu, Network } from "lucide-react";

const ChipAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
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