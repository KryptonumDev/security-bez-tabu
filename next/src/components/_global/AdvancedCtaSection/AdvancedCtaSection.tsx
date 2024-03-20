import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import styles from './AdvancedCtaSection.module.scss';
import type { AdvancedCtaSectionTypes } from './AdvancedCtaSection.types';
import ChipsAnimation from '@/components/ui/ChipsAnimation';

const AdvancedCtaSection = ({ heading, paragraph, secondHeading, cta, additionalInfo }: AdvancedCtaSectionTypes) => {
  return (
    <section className={styles['AdvancedCtaSection']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div>
        <Markdown.h3>{secondHeading}</Markdown.h3>
        <Button data={cta} />
        {additionalInfo && <Markdown className={styles.additionalInfo}>{additionalInfo}</Markdown>}
      </div>
      <ChipsAnimation
        positionX='left'
        positionY='center'
      />
    </section>
  );
};

export default AdvancedCtaSection;
