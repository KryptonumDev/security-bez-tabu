import styles from './AdvancedCtaSection.module.scss';
import type { Props } from './AdvancedCtaSection.types';
import Markdown from '@/components/ui/markdown';

const AdvancedCtaSection = ({ advancedCtaSection_LeftSide, advancedCtaSection_RightSide }: Props) => {
  return (
    <section className={styles['AdvancedCtaSection']}>
      <Markdown.h2>{advancedCtaSection_LeftSide.heading}</Markdown.h2>
      <Markdown.h2>{advancedCtaSection_RightSide.heading}</Markdown.h2>
    </section>
  );
};

export default AdvancedCtaSection;
