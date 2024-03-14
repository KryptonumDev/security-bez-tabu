import Button from '@/components/ui/Button';
import Countdown from '@/components/ui/Countdown';
import Markdown from '@/components/ui/markdown';
import styles from './SimpleCtaSection.module.scss';
import type { SimpleCtaSectionTypes } from './SimpleCtaSection.types';

const SimpleCtaSection = ({ heading, cta, additionalInfo, isCountdown, countdown_Date }: SimpleCtaSectionTypes) => {
  return (
    <section className={styles['SimpleCtaSection']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      </header>
      <Button
        data={cta}
        className={styles.cta}
      />
      <Markdown className={styles.additionalInfo}>{additionalInfo}</Markdown>

      {isCountdown && (
        <Countdown
          date={countdown_Date}
          className={styles.countdown}
        />
      )}
    </section>
  );
};

export default SimpleCtaSection;
