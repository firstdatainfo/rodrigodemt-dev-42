import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/lovable-uploads/ezyZip.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir áudio:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <div className={`
        relative
        before:content-['']
        before:absolute
        before:top-1/2
        before:left-1/2
        before:w-5
        before:h-5
        before:bg-white/80
        before:rounded-full
        before:-translate-x-1/2
        before:-translate-y-1/2
        before:scale-0
        before:opacity-0
        ${isExploding ? 'before:animate-explosion' : ''}
      `}>
        <Button
          variant="outline"
          size="icon"
          className={`
            rounded-full w-12 h-12 
            bg-black/90 hover:bg-black 
            border-red-500 hover:border-red-600 
            transition-all duration-300 
            shadow-lg hover:shadow-xl
            ${isExploding ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
          `}
          onClick={togglePlay}
          title={isPlaying ? "Pausar música" : "Tocar música"}
        >
          {isPlaying ? 
            <Pause className="h-6 w-6 text-red-500" /> : 
            <Play className="h-6 w-6 text-red-500" />
          }
        </Button>
      </div>
      <a 
        href="/lovable-uploads/ezyZip.mp3" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs text-white/70 hover:text-white underline"
      >
        Baixar música
      </a>
    </div>
  );
};

export default BackgroundMusic;