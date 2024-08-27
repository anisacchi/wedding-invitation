import guests from '@/data/guests.json';

export function getGuestByUrl(guestUrl: string) {
  return guests.find(
    (guest) => guest.url.toLowerCase() === guestUrl.toLowerCase()
  );
}