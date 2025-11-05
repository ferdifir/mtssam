import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { PPDBDialogProvider } from '@/components/landing/ppdb-dialog';

export const metadata: Metadata = {
  title: 'MTs Sunan Ampel Mulyosari',
  description: 'Website resmi MTs Sunan Ampel Mulyosari. Berakhlak Mulia, Berprestasi, Berwawasan Global.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <PPDBDialogProvider>
          {children}
        </PPDBDialogProvider>
        <Toaster />
      </body>
    </html>
  );
}
