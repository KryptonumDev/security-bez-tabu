import '@/global/global.scss';
import localFont from 'next/font/local';
import Script from 'next/script';
import Header from '@/components/_global/Header';
import Footer from '@/components/_global/Footer';
import SchemaOrganization from '@/global/Schema/Organization';
import { locale } from '@/global/Seo';

const Saira = localFont({
  src: [
    {
      path: '../assets/fonts/Saira-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['sans-serif'],
});
const IBMPlexSansHebrew = localFont({
  src: [
    {
      path: '../assets/fonts/IBMPlexSansHebrew-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--ibm-plex',
});

export const viewport = {
  themeColor: '#0D111F',
};

// export const runtime = 'edge'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <head>
        <SchemaOrganization />
        <Script
          id='gtm'
          strategy='lazyOnload'
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.GTM_ID}');`}
        </Script>
      </head>
      <body className={`${Saira.className} ${IBMPlexSansHebrew.variable}`}>
        <Header />
        <main id='main'>{children}</main>
        <Footer />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
