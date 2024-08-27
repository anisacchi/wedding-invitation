import type { Metadata } from 'next';
import { Sacramento, Delius, Caveat } from 'next/font/google';
import '@/styles/globals.css';

const delius = Delius({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-delius',
});

const sacramento = Sacramento({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-sacramento',
});

const caveat = Caveat({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Yoga & Anisa',
  description: 'Website undangan pernikahan Yoga dan Anisa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${delius.variable} ${sacramento.variable} ${caveat.variable}`}
    >
      <body className='h-screen flex justify-center'>
        <main className='h-screen aspect-9-16 overflow-hidden rounded-lg bg-white shadow-lg'>
          {children}
        </main>
      </body>
    </html>
  );
}
