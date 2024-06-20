import '~/styles/globals.css';
import classNames from 'classnames';
import { primaryFont, secondaryFont } from '~/fonts';

import { TRPCReactProvider } from '~/trpc/react';

export const metadata = {
  title: 'Connect.to',
  description: 'A connection app to quickly share different ways to connect with people.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={classNames(primaryFont.variable, secondaryFont.variable)}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
