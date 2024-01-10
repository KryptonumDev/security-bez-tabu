import Chips from './Chips';
import Counter from './counter';
import Item from './item';
import styles from './styles.module.scss';

const Stats = ({ list }) => {
  return (
    <section className={styles.wrapper}>
      <ul>
        {list.map(({ number, name }, i) => (
          <Item key={i} index={i}>
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