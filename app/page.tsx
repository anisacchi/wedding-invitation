import Image from 'next/image';
import hero from '@/public/images/hero.png';

export default function Home() {
  return (
    <div className='w-full p-6 flex flex-col justify-center items-center text-center'>
      <p className='font-light mb-8'>Undangan Pernikahan</p>
      <Image
        src={hero}
        alt='Bride and Groom'
        width={360}
        height={360}
        className='w-[70%]'
      />
      <h1 className='text-4xl mb-4 font-cursive'>Prayoga & Anisa</h1>
      <p className='text-sm mt-4'>
        Masukkan <span className='text-maroon-dark'>link undangan kamu </span>
        untuk lihat detailnya ya 🤗
      </p>
    </div>
  );
}
