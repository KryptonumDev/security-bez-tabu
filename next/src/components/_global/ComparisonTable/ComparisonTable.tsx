import Markdown from '@/components/ui/markdown';
import styles from './ComparisonTable.module.scss';
import type { ComparisonTableTypes } from './ComparisonTable.types';

const ComparisonTable = ({ heading }: ComparisonTableTypes) => {
  return (
    <section className={styles['ComparisonTable']}>
      <Markdown.h2>{heading}</Markdown.h2>
    </section>
  );
};

export default ComparisonTable;
