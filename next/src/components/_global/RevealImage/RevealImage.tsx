import styles from './RevealImage.module.scss';
import type { Props } from './RevealImage.types';
import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';

const RevealImage = ({ description, heading, img }: Props) => {
  return (
    <section className={styles['RevealImage']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <Markdown>{description}</Markdown>
      <Img data={img} sizes='' />
    </section>
  );
};

export default RevealImage;
