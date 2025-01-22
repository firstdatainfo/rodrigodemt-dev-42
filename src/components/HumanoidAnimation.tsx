import React from "react";
import { toast } from "@/components/ui/use-toast";

const HumanoidAnimation = () => {
  const handleClick = () => {
    toast({
      title: "Olá!",
      description: "Você clicou no humanoide!",
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div 
        className="w-[200px] h-[400px] bg-red-500/50 rounded-[100px] relative animate-pulse cursor-pointer"
        onClick={handleClick}
      >
        {/* Face */}
        <div className="w-[100px] h-[100px] bg-white/10 rounded-full absolute top-5 left-1/2 -translate-x-1/2" />
        
        {/* Braços */}
        <div className="w-[20px] h-[100px] bg-yellow-500/50 absolute top-[100px] -left-[30px] origin-right animate-wave-left" />
        <div className="w-[20px] h-[100px] bg-yellow-500/50 absolute top-[100px] -right-[30px] origin-left animate-wave-right" />
        
        {/* Pernas */}
        <div className="w-[40px] h-[150px] bg-green-500/50 absolute bottom-[-10px] left-[20%]" />
        <div className="w-[40px] h-[150px] bg-green-500/50 absolute bottom-[-10px] right-[20%]" />
      </div>
    </div>
  );
};

export default HumanoidAnimation;