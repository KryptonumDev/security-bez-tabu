import styles from './CtaSection.module.scss';
import Button from '@/components/ui/Button';
import Countdown from '@/components/ui/Countdown';
import Markdown from '@/components/ui/markdown';
import type { Props } from './CtaSection.types';

const CtaSection = ({ heading, cta, additionalInfo, isCountdown }: Props) => {
  return (
    <section className={styles['CtaSection']}>
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

export default CtaSection;
