import React, { useEffect, useState } from 'react';
import ParticlesBackground from '../ParticlesBackground';
import NeuralNetwork from '../NeuralNetwork';

const EventosBackground = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const backgroundImage = '/lovable-uploads/6b644bc7-2f02-43e3-a255-2c3a249e4f51.png';

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 z-0 bg-purple-900 ${
          imageLoaded ? 'opacity-0 animate-load-explosion' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)'
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900/50 via-primary/50 to-pink-900/50" />
      <div className="absolute inset-0 z-10 opacity-30">
        <ParticlesBackground />
        <NeuralNetwork />
      </div>
    </>
  );
};

export default EventosBackground;