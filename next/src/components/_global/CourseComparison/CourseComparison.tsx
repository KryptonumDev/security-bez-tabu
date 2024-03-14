import Markdown from '@/components/ui/markdown';
import styles from './CourseComparison.module.scss';
import type { CourseComparisonTypes } from './CourseComparison.types';

const CourseComparison = ({ heading, paragraph, plans }: CourseComparisonTypes) => {
  return (
    <section className={styles['CourseComparison']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.plans}>
        {plans.map(({ isHighlighted, heading, list }, i) => (
          <div
            key={i}
            className={styles.item}
            data-highlighted={!!isHighlighted}
          >
            <Markdown.h3>{heading}</Markdown.h3>
            <ol>
              {list.map(({ name, isPositive }, i) => (
                <li key={i}>
                  {isPositive ? <AdvantageIcon /> : <DisadvantageIcon />}
                  <span>{name}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseComparison;

const AdvantageIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={29}
    height={29}
    viewBox='0 0 29 29'
    fill='none'
  >
    <path
      opacity={0.5}
      d='M2.833 14.432c0-5.5 0-8.25 1.709-9.959C6.25 2.765 9 2.765 14.5 2.765s8.25 0 9.958 1.708c1.709 1.709 1.709 4.459 1.709 9.959s0 8.25-1.709 9.958C22.75 26.098 20 26.098 14.5 26.098s-8.25 0-9.958-1.708c-1.709-1.709-1.709-4.459-1.709-9.958Z'
      stroke='#53BAFD'
      strokeWidth={1.5}
    />
    <path
      d='M18 14.432h-3.5m0 0H11m3.5 0v-3.5m0 3.5v3.5'
      stroke='#53BAFD'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const DisadvantageIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={29}
    height={29}
    viewBox='0 0 29 29'
    fill='none'
  >
    <path
      opacity={0.5}
      d='M2.833 14.432c0-5.5 0-8.25 1.709-9.959C6.25 2.765 9 2.765 14.5 2.765s8.25 0 9.958 1.708c1.709 1.709 1.709 4.459 1.709 9.959s0 8.25-1.709 9.958C22.75 26.098 20 26.098 14.5 26.098s-8.25 0-9.958-1.708c-1.709-1.709-1.709-4.459-1.709-9.958Z'
      stroke='#F19D9D'
      strokeWidth={1.5}
    />
    <path
      d='M18 14.432h-7'
      stroke='#F19D9D'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);
