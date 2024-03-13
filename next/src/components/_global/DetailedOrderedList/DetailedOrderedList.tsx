import Markdown from '@/components/ui/markdown';
import styles from './DetailedOrderedList.module.scss';
import List from './_List';
import type { DetailedOrderedListTypes } from './DetailedOrderedList.types';

const DetailedOrderedList = ({ heading, paragraph, list }: DetailedOrderedListTypes) => {
  const renderedList = list.map(({ heading, paragraph }) => ({
    heading: <Markdown.h3>{heading}</Markdown.h3>,
    paragraph: <Markdown className={styles.paragraph}>{paragraph}</Markdown>,
  }));

  const animationDelays = Array.from({ length: list.length }, () => ({
    left: `${Math.random() * -5}s`,
    right: `${Math.random() * -5}s`,
  }));

  return (
    <section className={styles['DetailedOrderedList']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        {paragraph && <Markdown className={styles.paragraph}>{paragraph}</Markdown>}
      </header>
      <List
        className={styles['List']}
        list={renderedList}
        animationDelays={animationDelays}
      />
    </section>
  );
};

export default DetailedOrderedList;
