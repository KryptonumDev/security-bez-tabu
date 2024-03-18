import Markdown from '@/components/ui/markdown';
import styles from './CourseDetails.module.scss';
import ListItem from './_ListItem';
import type { CourseDetailsTypes } from './CourseDetails.types';

const CourseDetails = ({ heading, list }: CourseDetailsTypes) => {
  return (
    <section className={styles['CourseDetails']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <ol className={styles.list}>
        {list.map(({ heading, paragraph, duration }, i) => (
          <ListItem key={i}>
            <div>
              <div className={styles.header}>
                <h3>{heading}</h3>
                {duration && (
                  <p className={styles.duration}>
                    <TimeIcon />
                    <span>{duration}</span>
                  </p>
                )}
              </div>
              <Markdown className={styles.paragraph}>{paragraph}</Markdown>
            </div>
          </ListItem>
        ))}
      </ol>
    </section>
  );
};

export default CourseDetails;

const TimeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={24}
    viewBox='0 0 25 24'
    fill='none'
  >
    <path
      stroke='#53BAFD'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12.125 7.997v4l2.5 2.5'
    />
    <path
      stroke='#53BAFD'
      strokeWidth={1.5}
      d='M2.125 11.997c0-4.714 0-7.071 1.464-8.536 1.465-1.464 3.822-1.464 8.536-1.464 4.714 0 7.071 0 8.535 1.464 1.465 1.465 1.465 3.822 1.465 8.536 0 4.714 0 7.07-1.465 8.535-1.464 1.465-3.821 1.465-8.535 1.465s-7.071 0-8.536-1.465c-1.464-1.464-1.464-3.821-1.464-8.535Z'
      opacity={0.5}
    />
  </svg>
);
