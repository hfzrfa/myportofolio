import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LoadingScreen } from '@/components/loading';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
        <title>HAFIZ RAFIE ADITYA</title>
        <link rel="icon" href="/LOGO H.png" type="image/png" />
    </head>
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
