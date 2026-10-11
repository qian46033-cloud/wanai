import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  src?: string;
  songTitle?: string;
  artist?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  src = '/broken_heart.mp3',
  songTitle = 'broken heart',
  artist = 'FinalSay',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasUserToggled, setHasUserToggled] = useState<boolean>(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    // GitHub Pages base url fallback: if pathname has prefix
    const basePath = window.location.pathname.startsWith('/wanai') ? '/wanai' : '';
    const audioUrl = src.startsWith('http') ? src : `${basePath}${src.startsWith('/') ? '' : '/'}${src}`;
    
    audio.src = audioUrl;
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => {
      setIsAudioLoaded(true);
    };

    audio.addEventListener('canplay', handleCanPlay);

    // Attempt autoplay immediately
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay policy prevented playback until user interaction
        setIsPlaying(false);
        // Add one-time user interaction listener to resume automatically
        const handleFirstInteraction = () => {
          if (!hasUserToggled && audioRef.current && audioRef.current.paused) {
            audioRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              })
              .catch(() => {});
          }
          window.removeEventListener('click', handleFirstInteraction);
          window.removeEventListener('touchstart', handleFirstInteraction);
          window.removeEventListener('keydown', handleFirstInteraction);
        };

        window.addEventListener('click', handleFirstInteraction, { once: true });
        window.addEventListener('touchstart', handleFirstInteraction, { once: true });
        window.addEventListener('keydown', handleFirstInteraction, { once: true });
      }
    };

    attemptAutoplay();

    return () => {
      audio.pause();
      audio.removeEventListener('canplay', handleCanPlay);
      audioRef.current = null;
    };
  }, [src]);

  const togglePlay = () => {
    setHasUserToggled(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  return (
    <>
      {/* Floating or Header-level Audio Toggle Button */}
      <button
        onClick={togglePlay}
        className={`group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 cursor-pointer shadow-xs ${
          isPlaying
            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-neutral-900/10'
            : 'bg-white/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600'
        }`}
        title={isPlaying ? '点击暂停音乐' : '点击播放背景音乐'}
        aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-amber-500 dark:text-amber-400" />
            <span className="max-w-[70px] sm:max-w-[100px] truncate text-[11px] font-sans">
              {songTitle}
            </span>
            {/* Visualizer bars */}
            <span className="flex items-center gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 h-2.5 bg-current animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-3.5 bg-current animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-2 bg-current animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
            <span className="hidden sm:inline text-[11px] font-sans text-neutral-500 dark:text-neutral-400">
              音乐已关
            </span>
          </>
        )}
      </button>

      {/* Floating prompt toast when music starts on interaction if browser muted it */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-neutral-950 px-3.5 py-2 rounded-lg text-xs shadow-lg flex items-center gap-2 animate-fade-in pointer-events-none">
          <Music className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600 animate-spin" />
          <span>正在播放: {artist} - 《{songTitle}》</span>
        </div>
      )}
    </>
  );
};
