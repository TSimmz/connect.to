import '~/styles/globals.css';

import localfont from 'next/font/local';
import classNames from 'classnames';

import { TRPCReactProvider } from '~/trpc/react';

export const metadata = {
  title: 'Connect.to',
  description: 'A connection app to quickly share different ways to connect with people.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const font = localfont({ src: '../../assets/fonts/QTPeignoir.otf' });
const fontLite = localfont({ src: '../../assets/fonts/QTPeignoir-Lite.otf' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={classNames(font.className, fontLite.className)}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
