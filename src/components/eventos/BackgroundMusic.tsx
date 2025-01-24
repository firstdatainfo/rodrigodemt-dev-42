import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/lovable-uploads/czNEZdZggbY.mp3'));
  const { toast } = useToast();

  useEffect(() => {
    audio.loop = true;
    
    // Ajusta o volume para não ficar muito alto
    audio.volume = 0.3;
    
    // Adiciona listener para erros de áudio
    const handleError = (e: Event) => {
      console.error("Erro ao carregar áudio:", e);
      toast({
        title: "Erro ao carregar música",
        description: "Não foi possível reproduzir o áudio de fundo.",
        variant: "destructive"
      });
    };

    audio.addEventListener('error', handleError);
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener('error', handleError);
    };
  }, [audio, toast]);

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // Tenta reproduzir o áudio
        await audio.play();
        setIsPlaying(true);
        
        toast({
          title: "Música iniciada",
          description: "A música de fundo está tocando.",
        });
      }
    } catch (error) {
      console.error("Erro ao reproduzir áudio:", error);
      toast({
        title: "Erro ao reproduzir música",
        description: "Não foi possível iniciar a reprodução do áudio.",
        variant: "destructive"
      });
    }
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