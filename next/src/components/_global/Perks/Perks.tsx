import Markdown from '@/components/ui/markdown';
import styles from './Perks.module.scss';
import Heading from './_Heading';
import Item from './_Item';
import ChipsAnimation from '@/components/ui/ChipsAnimation';
import type { PerksTypes } from '.';

const Perks = ({ heading, list }: PerksTypes) => {
  return (
    <section className={styles['Perks']}>
      <Heading>
        <Markdown.h2>{heading}</Markdown.h2>
      </Heading>
      <ul className={styles.list}>
        {list.map(({ title, description }, i) => (
          <Item
            key={i}
            index={i}
            className={styles.item}
          >
            <div>
              <Markdown.h3>{title}</Markdown.h3>
              <Markdown>{description}</Markdown>
            </div>
            <Decoration className={styles.decoration} />
          </Item>
        ))}
      </ul>
      <ChipsAnimation positionX='left' />
    </section>
  );
};

export default Perks;

const Decoration = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='228'
    height='34'
    fill='none'
    viewBox='0 0 228 34'
    {...props}
  >
    <path
      stroke='#0D111F'
      strokeWidth='6'
      d='M222 30.5h3V3H8.277l5.698 5.213 23.5 21.5.86.787H222z'
    ></path>
  </svg>
);
