import styles from './HeadingWithNumeratedList.module.scss';
import type { Props } from './HeadingWithNumeratedList.types';
import Markdown from '@/components/ui/markdown';

const HeadingWithNumeratedList = ({ heading, list }: Props) => {
  return (
    <section className={styles['HeadingWithNumeratedList']}>
      <Markdown.h2>{heading}</Markdown.h2>
      {list.map(({ description, title }, index) => (
        <div key={index}>
          <Markdown.h3>{title}</Markdown.h3>
          <Markdown>{description}</Markdown>
        </div>
      ))}
    </section>
  );
};

export default HeadingWithNumeratedList;
