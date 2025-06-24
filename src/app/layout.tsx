import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lato, Montserrat } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-lato', // Define a CSS variable name
});

const monteserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-montserrat', // Define a CSS variable name
});

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

export const metadata: Metadata = {
  title: '<Jordan Ness>',
  description:
    'My personal portfolio website showcasing my projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${monteserrat.variable} antialiased`}
        className={`${monteserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
