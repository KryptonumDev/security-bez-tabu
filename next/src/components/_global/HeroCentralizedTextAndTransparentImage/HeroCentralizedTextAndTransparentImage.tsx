import styles from './HeroCentralizedTextAndTransparentImage.module.scss';
import type { Props } from './HeroCentralizedTextAndTransparentImage.types';
import Markdown from '@/components/ui/markdown';

const HeroCentralizedTextAndTransparentImage = ({ heading, additionalInfo, cta, description }: Props) => {
  return (
    <section className={styles['HeroCentralizedTextAndTransparentImage']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <Markdown>{additionalInfo}</Markdown>
    </section>
  );
};

export default HeroCentralizedTextAndTransparentImage;
