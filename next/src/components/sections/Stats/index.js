import Chips from './Chips';
import Counter from './counter';
import styles from './styles.module.scss';

const Stats = ({ list }) => {
  return (
    <section className={styles.wrapper}>
      <ul>
        {list.map(({ number, name }, i) => (
          <li key={i}>
            <p className='h2'>
              <Counter>{number}</Counter>
            </p>
            <p>{name}</p>
          </li>
        ))}
      </ul>
      <Chips />
    </section>
  );
};

export default Stats;