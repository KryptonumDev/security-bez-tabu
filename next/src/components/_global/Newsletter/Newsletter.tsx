import styles from './Newsletter.module.scss';
import type { Props } from './Newsletter.types';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';

const Newsletter = ({ heading, paragraph, cta, image }: Props) => {
  return (
    <section className={styles['Newsletter']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <Markdown>{paragraph}</Markdown>
      <Img data={image} />
      <Button data={cta} />
    </section>
  );
};

export default Newsletter;
