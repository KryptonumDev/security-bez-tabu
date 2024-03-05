import type { Props } from './HeroColumnWithImageReactor.types';
import styles from './HeroColumnWithImageReactor.module.scss';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';

const HeroColumnWithImageReactor = ({ additionalInfo, cta, heading, img, paragraph }: Props) => {
  return (
    <section className={styles['HeroColumnWithImageRefactor']}>
      <Img
        data={img}
        priority={true}
      />
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Button
          data={cta}
          className={styles.btn}
        />
        <Markdown className={styles.additionalInfo}>{additionalInfo}</Markdown>
      </header>
    </section>
  );
};

export default HeroColumnWithImageReactor;
