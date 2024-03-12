import styles from './DetailedOrderedList.module.scss';
import type { DetailedOrderedListTypes } from './DetailedOrderedList.types';

const DetailedOrderedList = ({ heading, subheading, list }: DetailedOrderedListTypes) => {
  return <section className={styles['DetailedOrderedList']}></section>;
};

export default DetailedOrderedList;
