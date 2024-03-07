import styles from './Stats.module.scss';
import type { Props } from './Stats.types';
import Chips from './_Chips';
import Counter from './_Counter';
import Item from './_Item';

const Stats = ({ list }: Props) => {
  return (
    <section className={styles['Stats']}>
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

export default Stats;
