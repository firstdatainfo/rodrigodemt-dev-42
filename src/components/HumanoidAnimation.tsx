import React from "react";
import { toast } from "@/components/ui/use-toast";

const HumanoidAnimation = () => {
  const handleClick = () => {
    toast({
      title: "A IA está aqui para ajudar!",
      description: "Transformando dados em decisões estratégicas com tecnologia avançada.",
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="container text-center bg-black/70 p-8 rounded-xl max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[#00ff99]">
          ERP Inteligente com IA
        </h1>
        <p className="text-xl text-white mb-12">
          Transformando dados em decisões estratégicas com tecnologia avançada.
        </p>
        
        <div 
          className="w-[200px] h-[400px] bg-[rgba(255,0,255,0.5)] rounded-[100px] relative animate-pulse cursor-pointer mx-auto"
          onClick={handleClick}
        >
          {/* Face */}
          <div className="w-[100px] h-[100px] bg-white/20 rounded-full absolute top-5 left-1/2 -translate-x-1/2" />
          
          {/* Braços */}
          <div className="w-[20px] h-[100px] bg-[rgba(255,255,0,0.5)] absolute top-[100px] -left-[30px] origin-right animate-wave-left" />
          <div className="w-[20px] h-[100px] bg-[rgba(255,255,0,0.5)] absolute top-[100px] -right-[30px] origin-left animate-wave-right" />
        </div>
      </div>
    </div>
  );
};

export default HumanoidAnimation;