import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Oneko from '@/components/Oneko';
import SpaceBackground from '@/components/SpaceBackground';
import AnimatedCursor from '@/components/AnimatedCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Priyanshu Rawat',
  description: 'Builder & Founder working on distributed systems and AI full-stack products. MUJ \'27.',
  metadataBase: new URL('https://my-portfolio-alpha-nine-82.vercel.app'),
  openGraph: {
    title: 'Priyanshu Rawat',
    description: 'Builder & Founder working on distributed systems and AI full-stack products.',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'Priyanshu Rawat' },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="text-white font-sans antialiased">
        <AnimatedCursor />
        <SpaceBackground />
        <div className="relative">
          {children}
        </div>
        <Oneko />
      </body>
    </html>
  );
}
