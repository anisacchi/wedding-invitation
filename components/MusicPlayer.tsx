'use client';

import React, { useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Playback failed:', error);
        });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        handlePlayMusic();
      }
    }
  };

  useEffect(() => {
    const startMusicOnInteraction = () => {
      handlePlayMusic();
      document.removeEventListener('click', startMusicOnInteraction);
      document.removeEventListener('touchstart', startMusicOnInteraction);
      document.removeEventListener('touchend', startMusicOnInteraction);
    };

    document.addEventListener('click', startMusicOnInteraction);
    document.addEventListener('touchstart', startMusicOnInteraction);
    document.addEventListener('touchend', startMusicOnInteraction);

    return () => {
      document.removeEventListener('click', startMusicOnInteraction);
      document.removeEventListener('touchstart', startMusicOnInteraction);
      document.removeEventListener('touchend', startMusicOnInteraction);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} muted loop>
        <source src='/music/forlove.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className='absolute z-50 bottom-10 right-2 p-2 border-2 bg-maroon-light hover:bg-maroon-light/80'
      >
        {isPlaying ? 'Pause M' : 'Play M'}
      </button>
    </div>
  );
};

export default MusicPlayer;
