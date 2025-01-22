import React from "react";

const HumanoidAnimation = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[200px] h-[400px] bg-red-500/50 rounded-[100px] relative animate-pulse">
        <div className="w-[100px] h-[100px] bg-white/10 rounded-full absolute top-5 left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
};

export default HumanoidAnimation;