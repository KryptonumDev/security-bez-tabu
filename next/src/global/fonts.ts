import { Saira as Saira_Font, IBM_Plex_Sans_Hebrew as IBM_Plex_Sans_Hebrew_Font } from 'next/font/google';

export const Saira = Saira_Font({
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'swap',
});

export const IBM_Plex_Sans_Hebrew = IBM_Plex_Sans_Hebrew_Font({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-secondary',
});
