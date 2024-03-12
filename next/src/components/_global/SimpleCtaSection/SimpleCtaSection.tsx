import Button from '@/components/ui/Button';
import Countdown from '@/components/ui/Countdown';
import Markdown from '@/components/ui/markdown';
import styles from './SimpleCtaSection.module.scss';
import type { Props } from './SimpleCtaSection.types';

const SimpleCtaSection = ({ heading, cta, additionalInfo, isCountdown }: Props) => {
  return (
    <section className={styles['SimpleCtaSection']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <Button
        data={cta}
        className={styles.cta}
      />
      <Markdown>{additionalInfo}</Markdown>
      {isCountdown && <Countdown className={styles.countdown} />}
    </section>
  );
};

export default SimpleCtaSection;
