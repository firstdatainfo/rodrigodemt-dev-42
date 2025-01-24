import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const togglePlay = () => {
    const iframe = document.getElementById('youtube-player') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      // Envia mensagem para o iframe do YouTube
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: isPlaying ? 'pauseVideo' : 'playVideo'
        }),
        '*'
      );
    }
    
    setIsPlaying(!isPlaying);
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      {/* Player do YouTube (oculto visualmente) */}
      <iframe
        id="youtube-player"
        src="https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1&autoplay=0&controls=0"
        className="w-0 h-0"
        allow="autoplay"
      />

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
    </div>
  );
};

export default BackgroundMusic;