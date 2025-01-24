import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Criar o elemento de áudio apenas quando o componente montar
    const audioElement = new Audio('/lovable-uploads/czNEZdZggbY.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);

    const handleError = () => {
      console.error("Erro ao carregar áudio");
      setIsPlaying(false);
      toast({
        title: "Erro ao carregar música",
        description: "Não foi possível reproduzir o áudio de fundo.",
        variant: "destructive"
      });
    };

    audioElement.addEventListener('error', handleError);

    // Tenta iniciar a reprodução quando o usuário interagir com a página
    const handleUserInteraction = async () => {
      try {
        if (audioElement) {
          await audioElement.play();
          setIsPlaying(true);
          toast({
            title: "Música iniciada",
            description: "A música de fundo está tocando.",
          });
          // Remove o listener após sucesso
          document.removeEventListener('click', handleUserInteraction);
        }
      } catch (error) {
        console.error("Erro ao reproduzir áudio:", error);
      }
    };

    document.addEventListener('click', handleUserInteraction);

    // Cleanup
    return () => {
      audioElement.removeEventListener('error', handleError);
      document.removeEventListener('click', handleUserInteraction);
      audioElement.pause();
      audioElement.src = '';
    };
  }, [toast]);

  const togglePlay = async () => {
    if (!audio) return;

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