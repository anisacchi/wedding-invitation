import MusicPlayer from '@/components/MusicPlayer';
import { MusicProvider } from '@/context/MusicContext';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <MusicProvider>
      <MusicPlayer />
      {children}
    </MusicProvider>
  );
};

export default layout;
