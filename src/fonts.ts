import localfont from 'next/font/local';
import { Poppins } from 'next/font/google';

export const primaryFont = localfont({
  src: [
    { path: '../assets/fonts/QTPeignoir-Lite.otf', weight: '300' },
    { path: '../assets/fonts/QTPeignoir.otf', weight: '400' },
  ],
  variable: '--font-primary',
});

export const secondaryFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-secondary',
});
