'use client';

import { useMusic } from '@/context/MusicContext';
import { useEffect } from 'react';
import { SpeakerOff, SpeakerOn } from './icons';

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
        className='absolute z-50 bottom-10 right-2 p-2 rounded-full border border-maroon-dark bg-white hover:bg-maroon-dark/10'
      >
        {isPlaying ? (
          <SpeakerOn width={20} height={20} color='#800000' />
        ) : (
          <SpeakerOff width={20} height={20} color='#800000' />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
