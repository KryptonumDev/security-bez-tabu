import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';

const Hero = ({
  heading,
  paragraph,
}) => {
  return (
    <section className={styles.wrapper}>
      <Markdown.h1>{heading}</Markdown.h1>
      <Markdown>{paragraph}</Markdown>
    </section>
  );
};

export default Hero;