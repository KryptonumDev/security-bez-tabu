import styles from './StatsList.module.scss';
import type { StatsListTypes } from './StatsList.types';
import Chips from './_Chips';
import Counter from './_Counter';
import Item from './_Item';

const StatsList = ({ list }: StatsListTypes) => {
  return (
    <section className={styles['StatsList']}>
      <ul>
        {list.map(({ number, name }, i) => (
          <Item
            key={i}
            index={i}
          >
            <p className='h2'>
              <Counter>{number}</Counter>
            </p>
            <p>{name}</p>
          </Item>
        ))}
      </ul>
      <Chips />
    </section>
  );
};

export default StatsList;
