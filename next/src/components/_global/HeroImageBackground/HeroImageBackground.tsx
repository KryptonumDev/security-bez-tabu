import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import styles from './HeroImageBackground.module.scss';
import type { HeroImageBackgroundTypes } from './HeroImageBackground.types';

const HeroImageBackground = ({ heading, paragraph, cta, img }: HeroImageBackgroundTypes) => {
  return (
    <section className={styles['HeroImageBackground']}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button data={cta} />
      </header>
      <div className={styles.img}>
        <Img
          data={img}
          sizes='520px'
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroImageBackground;
