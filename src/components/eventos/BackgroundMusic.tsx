import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState<HTMLAudioElement>(new Audio('/lovable-uploads/ezyZip.mp3'));
  const { toast } = useToast();

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;
    
    const handleLoadedData = () => {
      console.log("Áudio carregado com sucesso!");
    };

    const handleError = (e: Event) => {
      console.error("Erro ao carregar áudio:", e);
      toast({
        title: "Erro no áudio",
        description: "Não foi possível carregar a música de fundo.",
        variant: "destructive"
      });
    };

    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('error', handleError);

    return () => {
      console.log("Limpando recursos de áudio...");
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, [audio, toast]);

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        toast({
          title: "Música pausada",
          description: "A música de fundo foi pausada.",
        });
        console.log("Áudio pausado");
      } else {
        await audio.play();
        setIsPlaying(true);
        toast({
          title: "Música iniciada",
          description: "A música de fundo está tocando.",
        });
        console.log("Áudio reproduzindo");
      }
    } catch (error) {
      console.error("Erro ao controlar áudio:", error);
      toast({
        title: "Erro na reprodução",
        description: "Não foi possível controlar a música. Por favor, tente novamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <a 
      href="/lovable-uploads/ezyZip.mp3" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 bg-black/90 hover:bg-black border-red-500 hover:border-red-600 hover:scale-110 transition-all duration-300"
        onClick={(e) => {
          e.preventDefault();
          togglePlay();
        }}
        title={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? 
          <Pause className="h-6 w-6 text-red-500" /> : 
          <Play className="h-6 w-6 text-red-500" />
        }
      </Button>
    </a>
  );
};

export default BackgroundMusic;