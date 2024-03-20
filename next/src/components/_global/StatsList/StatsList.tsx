import Counter from './_Counter';
import Item from './_Item';
import styles from './StatsList.module.scss';
import ChipsAnimation from '@/components/ui/ChipsAnimation';
import type { StatsListTypes } from './StatsList.types';

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
      <ChipsAnimation positionX='right' />
    </section>
  );
};

export default StatsList;
