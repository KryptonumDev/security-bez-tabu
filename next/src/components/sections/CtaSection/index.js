import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';
import Countdown from '@/components/moleculas/countdown';

const CtaSection = ({
  heading,
  cta,
  additionalInfo,
  isCountdown,
}) => {

  return (
    <section className={styles.wrapper}>
      <Markdown.h2>{heading}</Markdown.h2>
      <Button data={cta} className={styles.cta} />
      <Markdown>{additionalInfo}</Markdown>
      {isCountdown && (
        <Countdown className={styles.countdown} />
      )}
    </section>
  );
};

export default CtaSection;