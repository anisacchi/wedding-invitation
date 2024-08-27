import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen'>
      <p className='font-light h-screen'>Wedding Invitation</p>
      <h1 className='text-4xl mb-4 font-cursive'>Prayoga & Anisa</h1>
      <p className='text-sm mt-4'>
        Please enter{' '}
        <span className='text-maroon-dark'>your invitation link </span>to view
        details.
      </p>

      <div className='h-screen'>Ini coba aja</div>
    </div>
  );
}
