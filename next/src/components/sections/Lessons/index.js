import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import List from './list';

const Lessons = ({ heading, paragraph, list }) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <List
        list={list}
        Border={Border}
      />
    </section>
  );
};

export default Lessons;

const Border = {
  Left: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='293'
      viewBox='0 0 22 293'
      fill='none'
      className={styles.borderLeft}
    >
      <path
        fill='#53BAFD'
        d='M19 1H1v291h16L1 271.984V17.796L19 1z'
      ></path>
      <path
        stroke='#53BAFD'
        strokeWidth='2'
        d='M1 17.796V1h18L1 17.796zm0 0v254.188m0 0V292h16L1 271.984z'
      ></path>
    </svg>
  ),
  Right: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='293'
      viewBox='0 0 22 293'
      fill='none'
      className={styles.borderRight}
    >
      <path
        fill='#53BAFD'
        d='M3 1h18v291H5l16-20.016V17.796L3 1z'
      ></path>
      <path
        stroke='#53BAFD'
        strokeWidth='2'
        d='M21 17.796V1H3l18 16.796zm0 0v254.188m0 0V292H5l16-20.016z'
      ></path>
    </svg>
  ),
};
