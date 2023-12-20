import '@/global/global.scss'
import localFont from 'next/font/local'
import SmoothScroll from '@/utils/SmoothScroll'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import SchemaOrganization from '@/global/Schema/Organization'
import { locale } from '@/global/Seo'

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
})
const IBMPlexSansHebrew = localFont({
  src: [
    {
      path: '../assets/fonts/IBMPlexSansHebrew-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--ibm-plex',
})

export const viewport = {
  themeColor: '#0D111F',
}

// export const runtime = 'edge'

export default function RootLayout({ children }) {
  return (
    <html lang={locale}>
      <head>
        <SchemaOrganization />
      </head>
        <body className={`${Saira.className} ${IBMPlexSansHebrew.variable}`}>
          <Header />
          <SmoothScroll>
            <main id="main">
              {children}
            </main>
          </SmoothScroll>
          <Footer />
        </body>
    </html>
  )
}