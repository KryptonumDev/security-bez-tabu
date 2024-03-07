import Footer from '@/components/_landing/Footer';
import Header from '@/components/_landing/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id='main'>{children}</main>
      <Footer />
    </>
  );
}