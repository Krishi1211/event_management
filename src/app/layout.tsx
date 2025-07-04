import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Events Explorer',
  description: 'Explore events easily with Next.js App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
