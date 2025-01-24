import { useEffect, useState } from "react";

const backgroundImage = "/lovable-uploads/96dae26a-eb3a-4bd0-918b-0f32f37e7470.png";

const EventosBackground = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      console.log("Background image loaded");
      setImageLoaded(true);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 z-0 bg-purple-900 transition-all duration-500 ${
          imageLoaded ? 'opacity-100 animate-fade-up' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent to-black/90" />
    </>
  );
};

export default EventosBackground;