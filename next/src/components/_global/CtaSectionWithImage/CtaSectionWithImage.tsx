import Img from '@/components/ui/image';
import styles from './CtaSectionWithImage.module.scss';
import type { Props } from './CtaSectionWithImage.types';
import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';

const CtaSectionWithImage = ({ additionalInfo, cta, description, heading, img }: Props) => {
  return (
    <section className={styles['CtaSectionWithImage']}>
      <div>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown>{additionalInfo}</Markdown>
        <Markdown>{description}</Markdown>
        <Img data={img} />
        <Button data={cta} />
      </div>
    </section>
  );
};

export default CtaSectionWithImage;
