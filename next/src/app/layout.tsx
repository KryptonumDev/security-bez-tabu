import Script from 'next/script';
import '@/global/global.scss';
import { Saira, IBM_Plex_Sans_Hebrew } from '@/global/fonts';
import { LOCALE, THEME_COLOR } from '@/global/constants';
import SchemaOrganization from '@/global/Schema/Organization';
import Footer from '@/components/_landing/Footer';
import CookieConsent from '@/components/_global/CookieConsent';
import { requestAsyncStorage } from 'next/dist/client/components/request-async-storage.external';
import DraftModeInfo from '@/components/ui/DraftModeInfo';

export const viewport = {
  themeColor: THEME_COLOR,
};

const isProduction = process.env.NODE_ENV === 'production';
const isDraftMode = !isProduction && !!requestAsyncStorage.getStore()?.draftMode.isEnabled;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={LOCALE}>
      <head>
        {isProduction && (
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
        )}
        <SchemaOrganization />
      </head>
      <body className={`${Saira.className} ${IBM_Plex_Sans_Hebrew.variable}`}>
        {children}
        <Footer />
        {isDraftMode && <DraftModeInfo />}
        {isProduction && <CookieConsent />}
        {isProduction && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }}
          />
        )}
      </body>
    </html>
  );
}
