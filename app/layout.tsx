import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Azanaw Nega | IT Student & Full-Stack Developer',
  description: 'Portfolio of Azanaw Nega, an IT student developing practical software skills.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
