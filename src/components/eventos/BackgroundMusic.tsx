import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    console.log("Iniciando configuração do áudio...");
    const audioElement = new Audio();
    audioElement.src = '/lovable-uploads/ezyZip.mp3';
    audioElement.loop = true;
    audioElement.volume = 0.3;
    
    audioElement.addEventListener('loadeddata', () => {
      console.log("Áudio carregado com sucesso!");
      setAudio(audioElement);
    });

    const handleError = (e: ErrorEvent) => {
      console.error("Erro detalhado ao carregar áudio:", {
        error: e.error,
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno
      });
      setIsPlaying(false);
      toast({
        title: "Erro ao carregar música",
        description: "Não foi possível reproduzir o áudio de fundo.",
        variant: "destructive"
      });
    };

    audioElement.addEventListener('error', () => {
      const error = audioElement.error;
      console.error("Erro do elemento de áudio:", {
        code: error?.code,
        message: error?.message
      });
    });

    window.addEventListener('error', handleError);

    const handleUserInteraction = async () => {
      try {
        console.log("Tentando reproduzir áudio após interação do usuário...");
        if (audioElement && audioElement.readyState >= 2) {
          await audioElement.play();
          setIsPlaying(true);
          toast({
            title: "Música iniciada",
            description: "A música de fundo está tocando.",
          });
          document.removeEventListener('click', handleUserInteraction);
          console.log("Reprodução iniciada com sucesso!");
        } else {
          console.log("Áudio ainda não está pronto para reprodução");
        }
      } catch (error) {
        console.error("Erro detalhado ao reproduzir áudio:", error);
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      console.log("Limpando recursos de áudio...");
      window.removeEventListener('error', handleError);
      document.removeEventListener('click', handleUserInteraction);
      audioElement.pause();
      audioElement.src = '';
      setAudio(null);
    };
  }, [toast]);

  const togglePlay = async () => {
    if (!audio) {
      console.log("Elemento de áudio não está disponível");
      return;
    }

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
        console.log("Tentando reproduzir áudio...");
        await audio.play();
        setIsPlaying(true);
        toast({
          title: "Música iniciada",
          description: "A música de fundo está tocando.",
        });
        console.log("Áudio reproduzindo");
      }
    } catch (error) {
      console.error("Erro detalhado ao controlar áudio:", error);
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