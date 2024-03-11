import Markdown from '@/components/ui/markdown';
import styles from './HeroImageBackground.module.scss';
import type { Props } from './HeroImageBackground.types';

const HeroImageBackground = ({ heading, additionalInfo }: Props) => {
  return (
    <section className={styles['HeroCentralizedTextAndTransparentImage']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <Markdown>{additionalInfo}</Markdown>
    </section>
  );
};

export default HeroImageBackground;
