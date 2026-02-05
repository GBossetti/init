import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Gonzalo Bossetti | Software Developer',
    template: '%s | Gonzalo Bossetti',
  },
  description:
    'Software developer passionate about building quality software. Sharing knowledge and projects.',
  keywords: ['software developer', 'web development', 'portfolio', 'blog'],
  authors: [{ name: 'Gonzalo Bossetti' }],
  creator: 'Gonzalo Bossetti',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Gonzalo Bossetti',
    title: 'Gonzalo Bossetti | Software Developer',
    description:
      'Software developer passionate about building quality software. Sharing knowledge and projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gonzalo Bossetti | Software Developer',
    description:
      'Software developer passionate about building quality software. Sharing knowledge and projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
