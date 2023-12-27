'use client'
import Link from 'next/link';
import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';
import Button from '@/components/atoms/Button';

const Header = () => {
  return (
    <>
      <a href="#main" className={styles.skipToMainContent}>Przejdź do głównej treści</a>
      <header className={styles.wrapper}>
        <div className="max-width">
          <Link href='/' aria-label="Strona główna" className={styles.logo}>
            <Logo />
          </Link>
          <Button>Dołączam do wyzwania</Button>
        </div>
      </header>
      <div
        className={styles.overlay}
        aria-hidden="true"
        onClick={() => setNavOpened(false)}
      />
    </>
  );
};

export default Header;