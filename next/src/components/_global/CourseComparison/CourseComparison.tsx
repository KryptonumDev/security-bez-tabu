import styles from './CourseComparison.module.scss';
import type { CourseComparisonTypes } from './CourseComparison.types';

const CourseComparison = ({ heading, paragraph, plans }: CourseComparisonTypes) => {
  return <section className={styles['CourseComparison']}></section>;
};

export default CourseComparison;
