import React, { useEffect, useState } from 'react';
import ParticlesBackground from '../ParticlesBackground';
import NeuralNetwork from '../NeuralNetwork';
import MagicParticles from '../MagicParticles';

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
      {imageLoaded && (
        <MagicParticles 
          imageSrc={backgroundImage}
          className="fixed inset-0 z-0"
        />
      )}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900/50 via-primary/50 to-pink-900/50" />
      <div className="absolute inset-0 z-10 opacity-30">
        <ParticlesBackground />
        <NeuralNetwork />
      </div>
    </>
  );
};

export default EventosBackground;