import styles from './HeroColumnWithImageRefactor.module.scss';
import type { Props } from './HeroColumnWithImageRefactor.types';
import Img from '@/components/ui/image';
import Button from '@/components/ui/Button';
import Markdown from '@/components/ui/markdown';

const HeroColumnWithImageRefactor = ({ additionalInfo, cta, heading, img, paragraph }: Props) => {
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

export default HeroColumnWithImageRefactor;
