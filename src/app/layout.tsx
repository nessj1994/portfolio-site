import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next';
import './globals.css';
import { Lato, Montserrat } from 'next/font/google';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faBluesky,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

library.add(faGithub, faBluesky, faLinkedin, faEnvelope);


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
    <html lang="en" className="scroll-smooth">
      <body
        // className={`${monteserrat.variable} antialiased`}
        className={`${monteserrat.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
