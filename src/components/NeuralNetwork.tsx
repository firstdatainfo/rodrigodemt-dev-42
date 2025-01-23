import { useEffect, useState } from 'react';

interface NeuralNetworkProps {
  isVisible?: boolean;
}

const NeuralNetwork = ({ isVisible = false }: NeuralNetworkProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none opacity-60 transition-opacity duration-300">
      {/* Efeito visual simplificado da rede neural */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/30 rounded-full filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/30 rounded-full filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-cyan-500/30 rounded-full filter blur-xl animate-blob animation-delay-4000" />
      </div>
    </div>
  );
};

export default NeuralNetwork;