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
  title: 'Prayoga & Anisa',
  description: 'Website undangan pernikahan Prayoga dan Anisa.',
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
      <body className='min-h-screen flex justify-center bg-white'>
        <main className='relative h-screen aspect-9-16 overflow-y-scroll overflow-x-hidden rounded-lg bg-white shadow-lg'>
          {children}
        </main>
      </body>
    </html>
  );
}
