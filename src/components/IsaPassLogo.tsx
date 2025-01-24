import React from 'react';
import { Shield, Key } from 'lucide-react';

const IsaPassLogo = () => {
  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative">
        <Shield className="w-8 h-8 text-white" />
        <Key className="w-4 h-4 text-white absolute bottom-0 right-0 transform translate-x-1 translate-y-1" />
      </div>
      <span className="text-2xl font-bold text-white tracking-wider">
        Isa<span className="text-purple-200">Pass</span>
      </span>
    </div>
  );
};

export default IsaPassLogo;