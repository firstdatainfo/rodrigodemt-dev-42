import React from "react";
import HumanoidAnimation from "@/components/HumanoidAnimation";
import NeuralNetwork from "@/components/NeuralNetwork";

const SistemaErp = () => {
  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-50 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/761f7ad8-e1b0-4784-b4d0-269104f712fc.png')",
          backgroundBlendMode: "overlay"
        }}
      />
      
      {/* Neural Network Animation Layer */}
      <div className="absolute inset-0 z-10">
        <NeuralNetwork />
      </div>

      {/* Content Layer */}
      <div className="relative z-20">
        <HumanoidAnimation />
      </div>
    </div>
  );
};

export default SistemaErp;