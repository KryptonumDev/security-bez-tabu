import styles from './SimpleDescriptiveGrid.module.scss';
import type { SimpleDescriptiveGridTypes } from './SimpleDescriptiveGrid.types';

const SimpleDescriptiveGrid = ({ heading, grid }: SimpleDescriptiveGridTypes) => {
  return (
    <section className={styles['SimpleDescriptiveGrid']}>
    </section>
  );
};

export default SimpleDescriptiveGrid;
