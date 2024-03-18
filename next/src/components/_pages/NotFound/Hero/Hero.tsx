import styles from './Hero.module.scss';
import type { Props } from './Hero.types';
import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';

const Hero = ({ heading, paragraph, cta, img }: Props) => {
  return (
    <section className={styles['Hero']}>
      <header>
        <span
          className={styles.decorationText}
          data-text='#404'
        >
          #404
        </span>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button data={cta} />
      </header>
      <Img
        data={img}
        sizes='(max-width: 600px) 100vw, (max-width: 1049px) 516px, 100vw'
        className={styles.img}
      />
    </section>
  );
};

export default Hero;
