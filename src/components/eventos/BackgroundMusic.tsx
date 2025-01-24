import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
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

    audioElement.addEventListener('error', (e) => {
      console.error("Erro ao carregar áudio:", e);
      toast({
        title: "Erro no áudio",
        description: "Não foi possível carregar a música de fundo.",
        variant: "destructive"
      });
    });

    const handleUserInteraction = async () => {
      try {
        if (audioElement && audioElement.readyState >= 2) {
          await audioElement.play();
          setIsPlaying(true);
          toast({
            title: "Música iniciada",
            description: "A música de fundo está tocando.",
          });
          document.removeEventListener('click', handleUserInteraction);
          console.log("Reprodução iniciada com sucesso!");
        }
      } catch (error) {
        console.error("Erro ao reproduzir áudio:", error);
        toast({
          title: "Erro na reprodução",
          description: "Não foi possível iniciar a música. Por favor, tente novamente.",
          variant: "destructive"
        });
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      console.log("Limpando recursos de áudio...");
      document.removeEventListener('click', handleUserInteraction);
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
      setAudio(null);
    };
  }, [toast]);

  const togglePlay = async () => {
    if (!audio) {
      console.log("Elemento de áudio não está disponível");
      toast({
        title: "Aguarde",
        description: "O áudio ainda está carregando. Por favor, aguarde um momento.",
      });
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
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 bg-black/90 hover:bg-black border-red-600 hover:border-red-

Vou criar um botão estilo YouTube para controlar a música de fundo, mantendo a funcionalidade existente mas melhorando a interface.

<lov-code>
Vamos atualizar o componente BackgroundMusic.tsx para ter uma aparência mais similar ao YouTube:

<lov-write file_path="src/components/eventos/BackgroundMusic.tsx">
import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
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

    audioElement.addEventListener('error', (e) => {
      console.error("Erro ao carregar áudio:", e);
      toast({
        title: "Erro no áudio",
        description: "Não foi possível carregar a música de fundo.",
        variant: "destructive"
      });
    });

    const handleUserInteraction = async () => {
      try {
        if (audioElement && audioElement.readyState >= 2) {
          await audioElement.play();
          setIsPlaying(true);
          toast({
            title: "Música iniciada",
            description: "A música de fundo está tocando.",
          });
          document.removeEventListener('click', handleUserInteraction);
          console.log("Reprodução iniciada com sucesso!");
        }
      } catch (error) {
        console.error("Erro ao reproduzir áudio:", error);
        toast({
          title: "Erro na reprodução",
          description: "Não foi possível iniciar a música. Por favor, tente novamente.",
          variant: "destructive"
        });
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      console.log("Limpando recursos de áudio...");
      document.removeEventListener('click', handleUserInteraction);
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
      setAudio(null);
    };
  }, [toast]);

  const togglePlay = async () => {
    if (!audio) {
      console.log("Elemento de áudio não está disponível");
      toast({
        title: "Aguarde",
        description: "O áudio ainda está carregando. Por favor, aguarde um momento.",
      });
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
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 bg-black/90 hover:bg-black border-red-500 hover:border-red-600 hover:scale-110 transition-all duration-300"
      onClick={togglePlay}
      title={isPlaying ? "Pausar música" : "Tocar música"}
    >
      {isPlaying ? 
        <Pause className="h-6 w-6 text-red-500" /> : 
        <Play className="h-6 w-6 text-red-500" />
      }
    </Button>
  );
};

export default BackgroundMusic;