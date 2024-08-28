import WelcomeScreen from '@/components/WelcomeScreen';
import { getGuestByUrl } from '@/lib/guest';
import { notFound } from 'next/navigation';

interface GuestPageProps {
  params: {
    guestUrl: string;
  };
}

const GuestPage = ({ params }: GuestPageProps) => {
  const guest = getGuestByUrl(params.guestUrl);

	if(!guest) {
		notFound();
	}

  return (
    <div className='relative w-full flex flex-col justify-center items-center'>
      <WelcomeScreen guestName={guest.name} />
    </div>
  );
};

export default GuestPage;
