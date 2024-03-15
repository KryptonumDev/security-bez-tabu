import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './BadgeIconSection.module.scss';
import type { BadgeIconSectionTypes } from './BadgeIconSection.types';

const BadgeIconSection = ({ icon, heading, paragraph }: BadgeIconSectionTypes) => {
  return (
    <section className={styles['BadgeIconSection']}>
      <Img
        data={icon}
        sizes='48px'
      />
      <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
    </section>
  );
};

export default BadgeIconSection;
