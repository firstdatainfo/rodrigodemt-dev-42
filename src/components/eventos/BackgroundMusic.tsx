import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/lovable-uploads/czNEZdZggbY.mp3'));

  useEffect(() => {
    audio.loop = true;
    
    // Ajusta o volume para não ficar muito alto
    audio.volume = 0.3;
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      // Tenta reproduzir o áudio e trata possíveis erros
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Erro ao reproduzir áudio:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
      onClick={togglePlay}
      title={isPlaying ? "Pausar música" : "Tocar música"}
    >
      {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </Button>
  );
};

export default BackgroundMusic;