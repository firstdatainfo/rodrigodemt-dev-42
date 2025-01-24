import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Começa como true para autoplay
  const [audio] = useState(new Audio('/lovable-uploads/czNEZdZggbY.mp3'));
  const { toast } = useToast();

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;
    
    const handleError = (e: Event) => {
      console.error("Erro ao carregar áudio:", e);
      setIsPlaying(false);
      toast({
        title: "Erro ao carregar música",
        description: "Não foi possível reproduzir o áudio de fundo.",
        variant: "destructive"
      });
    };

    audio.addEventListener('error', handleError);
    
    // Tenta iniciar a reprodução automaticamente
    const playAudio = async () => {
      try {
        await audio.play();
        toast({
          title: "Música iniciada",
          description: "A música de fundo está tocando.",
        });
      } catch (error) {
        console.error("Erro ao reproduzir áudio:", error);
        setIsPlaying(false);
        toast({
          title: "Erro ao reproduzir música",
          description: "Não foi possível iniciar a reprodução do áudio.",
          variant: "destructive"
        });
      }
    };

    playAudio();
    
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
        toast({
          title: "Música pausada",
          description: "A música de fundo foi pausada.",
        });
      } else {
        await audio.play();
        setIsPlaying(true);
        toast({
          title: "Música iniciada",
          description: "A música de fundo está tocando.",
        });
      }
    } catch (error) {
      console.error("Erro ao reproduzir áudio:", error);
      setIsPlaying(false);
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