import React from "react";
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
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[#00ff99]">
            ERP Inteligente com IA
          </h1>
          <p className="text-xl text-white mb-8">
            Transformando dados em decisões estratégicas com tecnologia avançada.
          </p>
          <p className="text-lg text-white/80 mb-6">
            Nossa solução integra inteligência artificial para otimizar seus processos empresariais,
            oferecendo insights precisos e automatização inteligente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SistemaErp;