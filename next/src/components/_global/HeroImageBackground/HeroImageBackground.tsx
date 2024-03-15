import Markdown from '@/components/ui/markdown';
import styles from './HeroImageBackground.module.scss';
import type { HeroImageBackgroundTypes } from './HeroImageBackground.types';

const HeroImageBackground = ({ heading, additionalInfo }: HeroImageBackgroundTypes) => {
  return (
    <section className={styles['HeroImageBackground']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <Markdown>{additionalInfo}</Markdown>
    </section>
  );
};

export default HeroImageBackground;
