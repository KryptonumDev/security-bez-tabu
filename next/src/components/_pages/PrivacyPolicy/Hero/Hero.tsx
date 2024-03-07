import styles from './Hero.module.scss';
import type { Props } from './Hero.types';
import Markdown from '@/components/ui/markdown';

const Hero = ({
  heading,
  paragraph
}: Props) => {
  return (
    <section className={styles['Hero']}>
      <Markdown.h1>{heading}</Markdown.h1>
      <Markdown>{paragraph}</Markdown>
    </section>
  );
};

export default Hero;