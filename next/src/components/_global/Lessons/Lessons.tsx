import styles from './Lessons.module.scss';
import type { Props } from './Lessons.types';
import List from './_List';
import Markdown from '@/components/ui/markdown';

const Lessons = ({ heading, paragraph, list }: Props) => {
  return (
    <section className={styles['Lessons']}>
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
      width='21'
      height='514'
      viewBox='0 0 21 514'
      fill='none'
      className={styles.borderLeft}
    >
      <path
        fill='#53BAFD'
        d='M19 .937H1V512.75h16L1 490.578v-467.1L19 .938z'
      ></path>
      <path
        stroke='#53BAFD'
        d='M1 23.478V.938h18L1 23.477zm0 0v467.1m0 0v22.172h16L1 490.578z'
      ></path>
    </svg>
  ),
  Right: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='514'
      viewBox='0 0 21 514'
      fill='none'
      className={styles.borderRight}
    >
      <path
        fill='#53BAFD'
        d='M2 .937h18V512.75H4l16-22.172v-467.1L2 .938z'
      ></path>
      <path
        stroke='#53BAFD'
        d='M20 23.478V.938H2l18 22.54zm0 0v467.1m0 0v22.172H4l16-22.172z'
      ></path>
    </svg>
  ),
};