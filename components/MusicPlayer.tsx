'use client';

import { useMusic } from '@/context/MusicContext';
import { useEffect } from 'react';

const MusicPlayer = () => {
  const { isPlaying, handlePlayMusic, toggleMusic } = useMusic();

  useEffect(() => {
    const startMusicOnInteraction = () => {
      handlePlayMusic();
      document.removeEventListener('click', startMusicOnInteraction);
    };

    document.addEventListener('click', startMusicOnInteraction);

    return () => {
      document.removeEventListener('click', startMusicOnInteraction);
    };
  }, []);

  return (
    <div>
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
