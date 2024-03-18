import Markdown from '@/components/ui/markdown';
import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';

const CourseDetails = ({ heading }: CourseDetailsTypes) => {
  return (
    <section className={styles['CourseDetails']}>
      <Markdown.h2>{heading}</Markdown.h2>
    </section>
  );
};

export default CourseDetails;
