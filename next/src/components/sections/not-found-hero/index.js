import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';
import Img from '@/components/atoms/Img';

const Hero = ({
  heading,
  paragraph,
  cta,
  img,
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <span className={styles.decorationText} data-text='#404'>#404</span>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button data={cta} />
      </header>
      <Img data={img} />
    </section>
  );
};

export default Hero;