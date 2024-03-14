import styles from './ComparisonTable.module.scss';
import type { ComparisonTableTypes } from './ComparisonTable.types';

const ComparisonTable = ({ heading, paragraph, table }: ComparisonTableTypes) => {
  return <section className={styles['ComparisonTable']}></section>;
};

export default ComparisonTable;
