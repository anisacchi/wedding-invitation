import MusicPlayer from '@/components/MusicPlayer';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MusicPlayer />
      {children}
    </>
  );
};

export default layout;
