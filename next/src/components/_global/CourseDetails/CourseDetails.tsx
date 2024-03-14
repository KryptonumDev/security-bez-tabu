import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';

const CourseDetails = ({ heading, list }: CourseDetailsTypes) => {
  return <section className={styles['CourseDetails']}></section>;
};

export default CourseDetails;
