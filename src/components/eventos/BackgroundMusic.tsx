import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const iframe = document.getElementById('youtube-player') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
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

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    const iframe = document.getElementById('youtube-player') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'setVolume',
          args: [newVolume]
        }),
        '*'
      );
    }
  };

  const toggleMute = () => {
    const iframe = document.getElementById('youtube-player') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: isMuted ? 'unMute' : 'mute'
        }),
        '*'
      );
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-4">
      {/* Player do YouTube (oculto visualmente) */}
      <iframe
        id="youtube-player"
        src="https://www.youtube.com/embed/czNEZdZggbY?enablejsapi=1&autoplay=0&controls=0"
        className="w-0 h-0"
        allow="autoplay"
      />

      <div className="flex items-center bg-black/90 rounded-full p-2 gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-red-500 hover:text-red-600 hover:bg-transparent"
          onClick={toggleMute}
          title={isMuted ? "Ativar som" : "Mutar"}
        >
          {isMuted ? 
            <VolumeX className="h-6 w-6" /> : 
            <Volume2 className="h-6 w-6" />
          }
        </Button>

        <div className="w-24">
          <Slider
            value={[volume]}
            min={0}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="cursor-pointer"
          />
        </div>

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
            variant="ghost"
            size="icon"
            className={`
              text-red-500 hover:text-red-600 hover:bg-transparent
              ${isExploding ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
            `}
            onClick={togglePlay}
            title={isPlaying ? "Pausar música" : "Tocar música"}
          >
            {isPlaying ? 
              <Pause className="h-6 w-6" /> : 
              <Play className="h-6 w-6" />
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;