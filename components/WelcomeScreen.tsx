'use client';

import Image from 'next/image';
import hero from '@/public/images/hero.png';
import { usePathname, useRouter } from 'next/navigation';
import { useMusic } from '@/context/MusicContext';
import { EnvelopeOpen } from './icons';

interface WelcomeScreenProps {
  guestName: string | undefined;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ guestName }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { handlePlayMusic } = useMusic();

  const openInvitationHandler = () => {
    handlePlayMusic();
    const detailPath = pathName + '/details';
    router.push(detailPath);
  };

  return (
    <div className='w-full h-screen p-6 flex flex-col justify-center items-center text-center'>
      <p className='font-light mb-8'>Undangan Pernikahan</p>
      <Image
        src={hero}
        alt='Bride and Groom Illustration'
        width={360}
        height={360}
        className='w-[70%]'
      />
      <h1 className='text-4xl mb-3 font-cursive'>Anisa & Prayoga</h1>
      <p className='text-lg mb-8'>Bismillah Menikah.</p>
      <p>Untuk</p>
      <div className='w-1/2 border-b-2 border-b-maroon-dark fles justify-center items-center mb-8'>
        <p className='font-guest text-xl'>{guestName}</p>
      </div>
      <button
        onClick={openInvitationHandler}
        className='px-4 py-2 flex gap-2 justify-center items-center bg-maroon-dark text-white text-sm rounded-lg hover:bg-maroon-light'
      >
        <EnvelopeOpen width={20} height={20} />
        <span className='text-sm'>Buka Undangan</span>
      </button>
    </div>
  );
};

export default WelcomeScreen;

